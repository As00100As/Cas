"""کمک‌تابع‌های نوشتن درس. هر درس: عنوان از سرفصل (syllabus) می‌آید."""
import html
def code(head, src):
    return f"<div class='code-block'><div class='cb-head'>{html.escape(head)}</div><pre><code>{html.escape(src.strip(chr(10)))}</code></pre></div>"
def table(rows, head=None):
    h=''.join(f'<th>{html.escape(c)}</th>' for c in head) if head else ''
    b=''.join('<tr>'+''.join(f'<td>{c}</td>' for c in r)+'</tr>' for r in rows)
    return f"<table class='tbl'>{'<thead><tr>'+h+'</tr></thead>' if h else ''}<tbody>{b}</tbody></table>"
def ic(s): return f"<code class='inline'>{html.escape(s)}</code>"
def lesson(level, n, text, exercise, py=None, extra='', title=None, packages=None):
    d={'content': text+extra, 'exercise': exercise}
    if py is not None: d['py']=py.strip('\n')
    if packages: d['packages']=packages
    if title: d['title']=title
    return (level, n, d)
def quiz(q, options, answer, explain):
    return {'q':q,'options':options,'answer':answer,'explain':explain}
