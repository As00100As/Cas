#!/usr/bin/env python3
"""اجرای همه‌ی کدهای py دوره‌های جدید با پایتون واقعی. اجرا: python3 tools/test_py.py [course]"""
import sys,os,re,subprocess,tempfile
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import build
only=sys.argv[1:] 
bad=0;n=0
for cid in build.ORDER:
    if only and cid not in only: continue
    t,_=build.build_course(cid)
    for li,l in enumerate(t['levels']):
        for x in l['lessons']:
            if not x.get('py'): continue
            n+=1
            src=re.sub(r'(?m)^await (.+)$',r'asyncio.run(\1)',x['py'])
            f=tempfile.NamedTemporaryFile('w',suffix='.py',delete=False,encoding='utf8');f.write(src);f.close()
            try: r=subprocess.run([sys.executable,'-I',f.name],capture_output=True,text=True,timeout=30)
            except subprocess.TimeoutExpired: print('TIMEOUT',cid,x['title']);bad+=1;continue
            if r.returncode: bad+=1;print('FAIL',cid,x['title'],'\n   ',r.stderr.strip().splitlines()[-1] if r.stderr.strip() else '')
print(f'{n} py اجرا شد، {bad} خطا')
