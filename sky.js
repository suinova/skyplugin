(function(){

  /**
   * Displays more stats on Sky page https://secure.sky.com/my-broadband
   */
  function _calc_(){
    var e = document.querySelector('#usage-section'),
        c = e.getAttribute('data-capacity'),
        u = e.getAttribute('data-usage'),
        rg = c - u,
        re = e.querySelector('p.para'),
        rs = re.innerText,
        rd = parseInt(rs.match(/\d+/)[0]),
        pd = 31-rd,
        rag = rg / rd;

    var ap = document.createElement('p'),
        buf = ['<table border="1" style="width:100%"><tr><th>Days past</th><th>Used daily</th><th>Remaining</th><th>Daily to use</th></tr><tr><td>'],
        dat = [''+pd, (u/pd).toFixed(2)+' GB', rg.toFixed(2)+' GB', rag.toFixed(2)+' GB'];

    buf.push(dat.join('</td><td>')); buf.push('</td></tr></table>');

    ap.innerHTML = buf.join('');
    re.appendChild(ap);
  }
  setTimeout(_calc_, 1500);

})();

