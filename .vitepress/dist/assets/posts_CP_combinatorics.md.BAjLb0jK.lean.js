import{_ as s,c as h,a0 as n,o as a}from"./chunks/framework.D84hx5uF.js";const d=JSON.parse('{"title":"Tổ hợp","description":"","frontmatter":{"head":[["link",{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}]]},"headers":[],"relativePath":"posts/CP/combinatorics.md","filePath":"posts/CP/combinatorics.md"}'),t={name:"posts/CP/combinatorics.md"};function l(p,i,k,c,e,r){return a(),h("div",null,i[0]||(i[0]=[n(`<h1 id="to-hop" tabindex="-1">Tổ hợp <a class="header-anchor" href="#to-hop" aria-label="Permalink to &quot;Tổ hợp&quot;">​</a></h1><p>Xin chào các bạn. Vì hôm nay chán quá nên mình quyết định sẽ viết blog.</p><p>Ở bài viết này mình sẽ viết về một chủ đề liên quan tới toán, nhưng cũng khá liên quan tới tin học, đặc biệt là ở các bài toán liên quan về đếm, đó là &quot;Đại số tổ hợp - Các khái niệm cơ bản&quot;.</p><p>Dĩ nhiên, ở trong một phạm vi blog thì mình không thể trình bày hết được những gì mà những nhà toán học đã khai phá được về lĩnh vực này dọc suốt chiều dài lịch sử, nên mình chỉ sẽ trình bày những gì quan trọng nhất, những gì cốt lõi nhất của phần này. Hy vọng các bạn cùng đón xem.</p><h2 id="quy-tac-cong" tabindex="-1">Quy tắc cộng <a class="header-anchor" href="#quy-tac-cong" aria-label="Permalink to &quot;Quy tắc cộng&quot;">​</a></h2><p>Cho bài toán như sau:</p><blockquote><p>Nam muốn đi từ Đà Nẵng ra Hà Nội. Có các tuyến sau mà Nam có thể đi trực tiếp từ Đà Nẵng ra Hà Nội:</p><ul><li>$3$ chuyến tàu hỏa (tất cả chúng đều phân biệt);</li><li>$2$ chuyến bay. Hỏi Nam có bao nhiêu cách chọn để đi từ Đà Nẵng ra Hà Nội?</li></ul></blockquote><p>Dễ dàng thấy rằng Nam có $3+2=5$ cách để chọn một tuyến đi từ Đà Nẵng ra Hà Nội, vì mỗi tuyến đều phân biệt nên Nam chỉ cần chọn ra $1$ tuyến bất kỳ trong số các tuyến trên.</p><p>Từ đó, ta rút ra được quy tắc cộng như sau:</p><blockquote><p>Trong một công việc được hoàn thành bởi hai hành động $X$ hoặc $Y$. Nếu hành động $X$ có $m$ cách thực hiện, hành động $Y$ có $n$ cách thực hiện và <strong>không trùng với bất cứ cách nào của hành động $X$</strong> thì số cách thực hiện công việc đó sẽ là $m+n$.</p></blockquote><p>Ta có thể mở rộng được quy tắc trên thành $k$ hành động: Giả sử một công việc được hoàn thành bởi $K$ hành động $1,2,\\ldots,K$, cách thứ $i$ ($1 \\leq i \\leq K$) có $a_i$ cách thực hiện, tất cả các cách đều không trùng nhau thì số cách thực hiện công việc đó là $\\Sigma^K_{i=1}a_i$.</p><h2 id="quy-tac-nhan" tabindex="-1">Quy tắc nhân <a class="header-anchor" href="#quy-tac-nhan" aria-label="Permalink to &quot;Quy tắc nhân&quot;">​</a></h2><p>Một bài toán được đặt ra như sau:</p><blockquote><p>Thầy Nhỏ muốn đi từ Hà Nội vào Huế, rồi từ Huế vào Quảng Nam. Biết rằng từ Hà Nội vào Huế có thể đi bằng $3$ cách: ô tô, tàu hỏa, hoặc máy bay. Còn từ Huế vào Quảng Nam có thể đi bằng hai cách: ô tô hoặc tàu hỏa. Hỏi thầy Nhỏ có bao nhiêu cách chọn các phương tiện để đi từ Hà Nội vào Quảng Nam?</p></blockquote><p>Để giải bài này thì ta thấy: ta sẽ chia ra hai quy trình riêng biệt:</p><ul><li>Quy trình $1$: Chọn ra phương tiện để đi từ Hà Nội vào Huế;</li><li>Quy trình $2$: Chọn ra phương tiện để đi từ Huế vào Quảng Nam.</li></ul><p>Để thực hiện quy trình $1$, ta có $3$ cách thực hiện. Với mỗi cách thực hiện quy trình $1$ thì ta có $2$ cách để thực hiện quy trình $2$. Vậy ta có tổng cộng $3\\times2=6$ cách để chọn các phương tiện để đi từ Hà Nội vào Quảng Nam.</p><p>Đối với dạng này, ta thấy rằng cứ mỗi cách thực hiện của quy trình trước thì ta có nhiều cách thực hiện để thực hiện quy trình sau. Từ đó, ta rút ra được quy tắc nhân như sau:</p><blockquote><p>Giả sử một công việc phải hoàn thành qua hai công đoạn liên tiếp nhau:</p><ul><li>Công đoạn $1$ có $m$ cách thực hiện;</li><li>Với mỗi cách thực hiện công đoạn $1$ có $n$ cách thực hiện công đoạn $2$;</li></ul><p>Khi đó số cách thực hiện công việc là $m\\times n$.</p></blockquote><p>Bạn có thể dễ dàng mở rộng quy tắc nhân với những trường hợp khác, phần này mình xin nhường lại cho bạn đọc.</p><h2 id="hoan-vi" tabindex="-1">Hoán vị <a class="header-anchor" href="#hoan-vi" aria-label="Permalink to &quot;Hoán vị&quot;">​</a></h2><p>Cho bài toán ví dụ như sau: Có $n$ chiếc ghế và có $n$ học sinh. Mỗi chiếc ghế sẽ được ngồi bởi $1$ học sinh. Hỏi có bao nhiêu cách sắp xếp $n$ học sinh vào $n$ chiếc ghế?</p><p>Ta giải như sau:</p><ul><li>Với chiếc thứ $1$ thì có $n$ cách xếp $1$ học sinh;</li><li>Chiếc ghế thứ $2$ có $n-1$ cách xếp (vì đã có một học sinh ngồi vào chiếc ghế thứ nhất);</li><li>Chiếc ghế thứ $3$ có $n-2$ cách xếp;</li><li>...</li><li>Chiếc ghế thứ $n$ có $1$ cách xếp.</li></ul><p>Vậy theo quy tắc nhân, số cách xếp là $n\\times (n-1) \\times \\ldots \\times 1=n!$, đây được gọi là <strong>$n$ giai thừa</strong>.</p><p>Cài đặt:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="chinh-hop" tabindex="-1">Chỉnh hợp <a class="header-anchor" href="#chinh-hop" aria-label="Permalink to &quot;Chỉnh hợp&quot;">​</a></h2><p>Một khái niệm gần giống với hoán vị đó chính là <strong>chỉnh hợp</strong>. Chỉnh hợp có $2$ loại:</p><ul><li>Chỉnh hợp lặp;</li><li>Chỉnh hợp không lặp.</li></ul><h3 id="chinh-hop-lap" tabindex="-1">Chỉnh hợp lặp <a class="header-anchor" href="#chinh-hop-lap" aria-label="Permalink to &quot;Chỉnh hợp lặp&quot;">​</a></h3><p>Một bài toán liên quan đến chỉnh hợp lặp được phát biểu như sau:</p><blockquote><p>Cho $4$ chữ số $1$, $2$, $3$, $4$. Hỏi lập được bao nhiêu số có $4$ chữ số?</p></blockquote><p>Ta thấy rằng, số có $4$ chữ số sẽ có dạng $\\overline{abcd}$, trong đó:</p><ul><li>Có $4$ cách chọn $4$ chữ số cho chữ số $a$;</li><li>Có $4$ cách chọn $4$ chữ số cho chữ số $b$;</li><li>Có $4$ cách chọn $4$ chữ số cho chữ số $c$;</li><li>Có $4$ cách chọn $4$ chữ số cho chữ số $d$.</li></ul><p>Vậy theo quy tắc nhân, số lượng số có $4$ chữ số là $4\\times 4\\times 4 \\times 4=256$ số.</p><p>Từ đó, ta có khái niệm và công thức của chỉnh hợp lặp:</p><ul><li>Cho một tập hợp $X$ gồm $n$ phần tử ($n$ là số nguyên dương). Một dãy có độ dài $m$ ($m \\leq n$) các phần tử của $X$, trong đó mỗi phần tử có thể lặp lại nhiều lần, sắp xếp theo thư tự nhất định gọi là chỉnh hợp lặp chập $m$ của $n$ phần tử. Kí hiểu của chỉnh hợp lặp chập $m$ của $n$ là $F_n^m$.</li><li>Công thức: $F_n^m=n^m$.</li></ul><h4 id="cai-đat" tabindex="-1">Cài đặt <a class="header-anchor" href="#cai-đat" aria-label="Permalink to &quot;Cài đặt&quot;">​</a></h4><p>Ta dùng lũy thừa nhị phân để tính $n^m$ trong $\\Theta(\\log (m))$.</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> binpow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="chinh-hop-khong-lap" tabindex="-1">Chỉnh hợp không lặp <a class="header-anchor" href="#chinh-hop-khong-lap" aria-label="Permalink to &quot;Chỉnh hợp không lặp&quot;">​</a></h3><p>Ta xét bài toán như sau: Cho $8$ chữ số từ $1$ đến $8$, hãy đếm xem có bao nhiêu số nguyên dương có $4$ chữ số, và các chữ số của chúng đôi một khác nhau.</p><p>Ta giải quyết tương tự với bài toán ở trên:</p><ul><li>Chữ số $a$ có $8$ cách chọn;</li><li>Chữ số $b$ có $7$ cách chọn (bỏ đi một chữ số đã được chọn cho chữ số $a$);</li><li>Chữ số $c$ có $6$ cách chọn;</li><li>Chữ số $d$ có $5$ cách chọn.</li></ul><p>Vậy theo quy tắc nhân, số lượng số thỏa mãn là $8\\times 7\\times 6\\times 5=1680$.</p><p>Ta thấy rằng: chỉnh hợp không lặp cũng khá giống với hoán vị, nhưng đối với chỉnh hợp không lặp thì ta chỉ thấy ra $m$ phần tử trong một tập $n$ phần tử rồi sắp xếp chúng lại với nhau, từ đó ta có định nghĩa &amp; công thức của chỉnh hợp không lặp:</p><ul><li>Cho tập hợp $X$ gồm $n$ phần tử ($n$ là số nguyên dương). Một dãy có độ dài $m$ ($m \\leq n$) phần tử của $X$, trong đó mỗi phần tử đều khác với các phần tử còn lại, sắp xếp chúng theo một trật tự nhất định gọi là <strong>chỉnh hợp không lặp</strong> chập $m$ của $n$. Ký hiệu chỉnh hợp không lặp chập $m$ của $n$ là $A^m_n$.</li><li>Công thức: $A_n^m=\\dfrac{n!}{(n-m)!}$.</li></ul><h4 id="cai-đat-1" tabindex="-1">Cài đặt <a class="header-anchor" href="#cai-đat-1" aria-label="Permalink to &quot;Cài đặt&quot;">​</a></h4><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // chỉnh hợp không lặp chập m của n</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // f là hàm tính giai thừa</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="to-hop-1" tabindex="-1">Tổ hợp <a class="header-anchor" href="#to-hop-1" aria-label="Permalink to &quot;Tổ hợp&quot;">​</a></h2><ul><li>Định nghĩa: Tổ hợp chập $k$ của $n$ là một cách chọn ra $k$ phần tử từ một tập hợp $n$ phần tử và không phân biệt thứ tự, ký hiệu là $C^k_n$.</li><li>Công thức: $C^k_n=\\dfrac{n!}{k!\\times (n-k)!}=\\dfrac1{k!}\\times A_n^m$.</li></ul><p>Ta thấy rằng tổ hợp nó cũng liên hệ một phần với chỉnh hợp.</p><p>Một bài toán ví dụ như sau: Một lớp học có $35$ học sinh, cô giáo muốn chọn ra $8$ học sinh bất kỳ để tham dự Đại hội Đoàn trường. Hỏi cô giáo có bao nhiêu cách chọn thỏa mãn?</p><p>Đáp án là $\\dfrac{35!}{8!\\times 27!}=23535820$ (cách).</p><h2 id="mot-so-bai-toan-lien-quan" tabindex="-1">Một số bài toán liên quan <a class="header-anchor" href="#mot-so-bai-toan-lien-quan" aria-label="Permalink to &quot;Một số bài toán liên quan&quot;">​</a></h2><p>Ta thấy được rằng, những kết quả của các phép chỉnh hợp, tổ hợp, hoán vị có thể cực kỳ lớn (vượt quá giới hạn $10^{18}$), cho nên các bài toán trong Tin học liên quan tới các khái niệm này thường yêu cầu in ra kết quả sau khi modulo (chia lấy dư) cho một hằng số nào đó, ví dụ như $10^9+7$, $998244353$, ...</p><p>Ta sẽ tới với một số bài toán như sau:</p><h3 id="bai-toan-1" tabindex="-1">Bài toán 1 <a class="header-anchor" href="#bai-toan-1" aria-label="Permalink to &quot;Bài toán 1&quot;">​</a></h3><p>Cho một dãy số nguyên $a_1,a_2,\\ldots,a_n$. Đếm số lượng cặp chỉ số $(i,j)$ với $1 \\leq i &lt; j \\leq n$ sao cho $a_i\\times a_j$ là một số nguyên dương.</p><p>Giới hạn: $n \\leq 10^5$, $a_i \\leq 10^9$, $50%$ số test có $n \\leq 10^3$.</p><h4 id="loi-giai" tabindex="-1">Lời giải <a class="header-anchor" href="#loi-giai" aria-label="Permalink to &quot;Lời giải&quot;">​</a></h4><h5 id="cay-trau" tabindex="-1">Cày trâu: <a class="header-anchor" href="#cay-trau" aria-label="Permalink to &quot;Cày trâu:&quot;">​</a></h5><p>For 2 vòng rồi đếm số cặp chỉ số thỏa mãn. Độ phức tạp $\\Theta(n^2)$.</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (a[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res;</span></span></code></pre></div><h5 id="full" tabindex="-1">Full <a class="header-anchor" href="#full" aria-label="Permalink to &quot;Full&quot;">​</a></h5><p>Ta có tính chất:</p><ul><li>dương $\\times$ dương $=$ dương;</li><li>âm $\\times$ âm $=$ dương.</li></ul><p>Vậy ta có thể đếm số lượng số dương, số lượng số âm, sau đó áp dụng quy tắc cộng &amp; quy tắc nhân là hoàn thành bài toán.</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> posNum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> negNum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) posNum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) negNum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> posNum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (posNum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> negNum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (negNum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Độ phức tạp là $\\Theta(n)$.</p><h3 id="bai-toan-2" tabindex="-1">Bài toán 2 <a class="header-anchor" href="#bai-toan-2" aria-label="Permalink to &quot;Bài toán 2&quot;">​</a></h3><p>Cho một dãy số nguyên dương $a_1,a_2,\\ldots,a_n$. Đếm số lượng bộ $k$ chỉ số $(i_1,i_2,\\ldots,i_k)$ với $1 \\leq i_1 &lt; i_2 &lt; \\ldots &lt; i_k \\leq n$ thỏa mãn $a_{i_1}\\times a_{i_2}\\times \\ldots \\times a_{i_k}=1$.</p><h4 id="loi-giai-1" tabindex="-1">Lời giải <a class="header-anchor" href="#loi-giai-1" aria-label="Permalink to &quot;Lời giải&quot;">​</a></h4><p>Nhận thấy rằng tích trên bằng $1$ khi tất cả các phần tử đều bằng $1$. Đếm số lượng số $1$ sau đó áp dụng công thức tổ hợp là hoàn thành bài toán.</p><h2 id="bai-tap-tu-giai" tabindex="-1">Bài tập tự giải <a class="header-anchor" href="#bai-tap-tu-giai" aria-label="Permalink to &quot;Bài tập tự giải&quot;">​</a></h2><ul><li><a href="https://lqdoj.edu.vn/problem/strperm" target="_blank" rel="noreferrer">LQDOJ - Số hoán vị</a>;</li><li><a href="https://oj.vnoi.info/problem/twoside" target="_blank" rel="noreferrer">VNOJ - Bộ bài hai mặt</a>;</li><li><a href="https://codeforces.com/problemset/problem/1823/A" target="_blank" rel="noreferrer">Codeforces - 1823A</a>;</li></ul><p>Ngoài ra bạn có cũng thế lọc các bài theo tag <code>tổ hợp (combinatorics)</code> để tìm thêm các bài tập.</p>`,78)]))}const o=s(t,[["render",l]]);export{d as __pageData,o as default};
