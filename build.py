#!/usr/bin/env python3
"""ساخت دوره‌های جدید: سرفصل‌ها (tools/syllabus) + درس‌های نوشته‌شده (tools/lessons/<id>/*.py)
   → data/courses/<id>.js ، بازنویسی index.html و manifest.json
   اجرا: python3 tools/build.py"""
import importlib.util, json, os, glob, sys, re
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0,os.path.join(ROOT,'tools')); sys.path.insert(0,os.path.join(ROOT,'tools','syllabus'))
from courses import META, ORDER
SYL={'pyzero':'pyzero','ai':'ai','network':'net','it':'it','hardware':'hw'}
def load(path):
    spec=importlib.util.spec_from_file_location(os.path.basename(path)[:-3],path); m=importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m
def build_course(cid):
    syl=__import__(SYL[cid]); meta=META[cid]
    got={}; quizzes={}; chals={}; project=None
    for f in sorted(glob.glob(os.path.join(ROOT,'tools','lessons',cid,'*.py'))):
        m=load(f)
        for lv,n,d in getattr(m,'LESSONS',[]):
            assert (lv,n) not in got, f'{cid} L{lv}#{n} تکراری در {f}'
            assert 1<=lv<=4 and 1<=n<=len(syl.LEVELS[lv-1]),(cid,lv,n)
            got[(lv,n)]=d
        for lv,qs in getattr(m,'QUIZ',{}).items(): quizzes.setdefault(lv,[]).extend(qs)
        chals.update(getattr(m,'CHALLENGE',{}))
        project=getattr(m,'PROJECT',project)
    levels=[]
    for lv in range(1,5):
        ls=[]
        for n in range(1,len(syl.LEVELS[lv-1])+1):
            d=got.get((lv,n))
            if not d: continue
            d=dict(d); d.setdefault('title',syl.LEVELS[lv-1][n-1]); ls.append(dict(title=d.pop('title'),**d))
        if not ls: continue
        L={'lessons':ls,'quiz':quizzes.get(lv,[])}
        if lv in chals: L['challenge']=chals[lv]
        levels.append(L)
    t=dict(id=cid,name=meta['name'],icon=meta['icon'],kind=meta['kind'],desc=meta['desc']+f' — منتشرشده تا اینجا: {len(got)} از ۲۰۰ درس',covers=meta['covers'],levels=levels)
    if project: t['project']=project
    return t,len(got)
def main():
    out=[];total=0
    for cid in ORDER:
        t,n=build_course(cid); total+=n
        p=os.path.join(ROOT,'data','courses',cid+'.js')
        if not t['levels']:
            if os.path.exists(p): os.remove(p)
            print(f'{cid}: هنوز درسی ندارد'); continue
        open(p,'w',encoding='utf8').write("(window.COURSES=window.COURSES||[]).push("+json.dumps(t,ensure_ascii=False,indent=1)+");\n")
        out.append(cid); print(f'{cid}: {n} درس از ۲۰۰')
    man=json.load(open(os.path.join(ROOT,'data','manifest.json'),encoding='utf8'))
    old=[c for c in man['courses'] if c not in ORDER]
    man['courses']=old+out
    json.dump(man,open(os.path.join(ROOT,'data','manifest.json'),'w',encoding='utf8'),ensure_ascii=False,indent=1)
    idx=os.path.join(ROOT,'index.html'); h=open(idx,encoding='utf8').read()
    tags='\n'.join(f'<script src="data/courses/{c}.js"></script>' for c in man['courses'])
    h=re.sub(r'(<!-- داده‌ی دوره‌ها.*?-->\n).*?(\n<script src="js/core.js">)',lambda m:m.group(1)+tags+m.group(2),h,flags=re.S)
    open(idx,'w',encoding='utf8').write(h)
    print('جمع درس‌های جدید:',total)
if __name__=='__main__': main()
