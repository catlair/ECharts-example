(function () {
  function time() {
    const nowDate = new Date();
    const y = nowDate.getFullYear(),
      mt = nowDate.getMonth(),
      d = nowDate.getDate(),
      h = nowDate.getHours(),
      m = nowDate.getMinutes(),
      s = nowDate.getSeconds();

    const $time = document.querySelector('.show-time');

    $time.innerHTML = `当前时间：${y}年${mt}月${d}-${h}时${m}分${s}秒`;
  }

  setInterval(time, 500);
})();
