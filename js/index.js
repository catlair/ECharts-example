function echartsInit(selector, option) {
  if (!option) {
    return;
  }
  const $dom =
    typeof selector === 'string' ? document.querySelector(selector) : selector;
  const myChart = echarts.init($dom);
  myChart.setOption(option);

  window.addEventListener('resize', () => {
    myChart.resize();
  });

  return myChart;
}

const commonTooltip = {
  textStyle: {
    fontWeight: 400,
    color: '#fff',
  },
  backgroundColor: '#272a3780',
  borderWidth: 0,
};

/** 柱形图就业行业 */
(function () {
  const data = new Map([
    ['2020', [200, 300, 300, 900, 1500, 1200, 600]],
    ['2021', [210, 100, 200, 700, 900, 1500, 1000]],
  ]);
  const option = {
    //设置柱子颜色
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      ...commonTooltip,
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '旅游行业',
          '教育培训',
          '游戏行业',
          '医疗行业',
          '电商行业',
          '社交行业',
          '金融行业',
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12,
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        // y 轴文字标签样式
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
        // y轴线条样式
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
        // y 轴分隔线样式
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: data.get('2020'),
        itemStyle: {
          barBorderRadius: 5,
        },
      },
    ],
  };

  const myChart = echartsInit('.left-bar .chart', option);
  const $changeYear = document.querySelector('.left-bar h2');

  let year = '';
  $changeYear.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'A') {
      return;
    }
    if (year === e.target.innerText) {
      return;
    }
    year = e.target.innerText;
    option.series[0].data = data.get(year);
    myChart.setOption(option);
  });
})();

/** 柱形图技能掌握 */
(function () {
  const myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  const option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: 'category',
        data: ['HTML5', 'CSS3', 'javascript', 'Vue', 'Node'],
        //反转
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#fff',
        },
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: '#fff',
          },
        },
      },
    ],
    series: [
      {
        name: '条',
        yAxisIndex: 0,
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 柱子设为圆角
        itemStyle: {
          barBorderRadius: 20,
          color(params) {
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          },
        },
        // 图形上的文本标签
        label: {
          show: true,
          // 图形内显示
          position: 'inside',
          // 文字的显示格式
          formatter: '{c}%',
          color: ['#fff'],
        },
        type: 'bar',
        data: [70, 34, 60, 78, 69],
      },
      {
        name: '框',
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 20,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15,
        },
        type: 'bar',
        data: [100, 100, 100, 100, 100],
      },
    ],
  };
  echartsInit('.right-bar .chart', option);
})();

/** 折线图人员变化 */
(function () {
  const option = {
    tooltip: {
      trigger: 'axis',
      ...commonTooltip,
    },
    color: ['#00f2f1', '#ed3f35'],
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      containLabel: true, // 包含刻度文字在内
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: '#4c9bfd',
      },
      // 这个10% 必须加引号
      right: '10%',
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      boundaryGap: false, // 去除轴内间距
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false, // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd', // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a', // 分割线颜色
        },
      },
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: '总量',
        // 折线修饰为圆滑
        smooth: true,
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      },
      {
        name: '新增游客',
        type: 'line',
        // 折线修饰为圆滑
        stack: '总量',
        smooth: true,
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      },
    ],
  };

  echartsInit('.left-line .chart', option);
})();

/** 折线图播放量 */
(function () {
  const data = new Map([
    [
      '3月',
      [
        [
          30,
          40,
          30,
          78,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40,
        ],
        [
          130,
          10,
          20,
          40,
          30,
          40,
          80,
          60,
          20,
          40,
          90,
          70,
          40,
          20,
          140,
          30,
          40,
          130,
          20,
          20,
          40,
          80,
          70,
          30,
          40,
          30,
          120,
          20,
          99,
          50,
          20,
        ],
      ],
    ],
    [
      '4月',
      [
        [
          20,
          40,
          30,
          60,
          30,
          40,
          30,
          100,
          20,
          40,
          30,
          50,
          20,
          40,
          30,
          10,
          30,
          60,
          20,
          60,
          30,
          10,
          30,
          40,
          70,
          40,
          20,
          60,
          90,
          20,
        ],
        [
          30,
          110,
          20,
          40,
          30,
          10,
          80,
          60,
          30,
          40,
          70,
          40,
          20,
          40,
          30,
          40,
          150,
          20,
          20,
          40,
          80,
          70,
          30,
          120,
          30,
          20,
          40,
          79,
          10,
          80,
        ],
      ],
    ],
  ]);

  const xAxisData = new Array(31)
    .fill(1)
    .map((_, i) => ((i += 1), i < 10 ? '0' + i : '' + i));

  const option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      ...commonTooltip,
    },
    // 图例组件
    legend: {
      top: '0%',
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
    },
    // 设置网格样式
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '10',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      boundaryGap: false, // 去除轴内间距
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12,
        },
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
    },
    series: [
      {
        name: '播放量',
        type: 'line',
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: '#0184d5',
          width: 1,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)',
              },
              {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)',
              },
            ],
            false
          ),
        },
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        // 设置拐点 小圆点
        symbol: 'circle',
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
        data: data.get('3月')[0],
      },
      {
        name: '转发量',
        type: 'line',
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: '#00d887',
          width: 1,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0, 216, 135, 0.4)',
              },
              {
                offset: 0.8,
                color: 'rgba(0, 216, 135, 0.1)',
              },
            ],
            false
          ),
        },
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        // 设置拐点 小圆点
        symbol: 'circle',
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: '#00d887',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
        data: data.get('3月')[1],
      },
    ],
  };

  const myChart = echartsInit('.right-line .chart', option);
  const $changeMonth = document.querySelector('.right-line h2');
  let month = '';
  $changeMonth.addEventListener('click', ({ target }) => {
    if (target.nodeName !== 'A') {
      return;
    }
    if (month === target.innerText) {
      return;
    }
    month = target.innerText;
    month === '3月' ? xAxisData.push('31') : xAxisData.pop();
    option.series[0].data = data.get(month)[0];
    option.series[1].data = data.get(month)[1];
    myChart.setOption(option);
  });
})();

/** 饼状图年龄分布 */
(function () {
  const option = {
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
    tooltip: {
      trigger: 'item',
      ...commonTooltip,
      formatter: `{a}<br />{b}：{c}（{d}%）`,
    },
    legend: {
      // 距离底部为0%
      bottom: '0%',
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        // 设置饼形图在容器中的位置
        center: ['50%', '50%'],
        //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1, name: '0-20岁' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' },
        ],
      },
    ],
  };

  echartsInit('.left-pie .chart', option);
})();

/** 饼状图地区分布 */
(function () {
  const option = {
    color: [
      '#006cff',
      '#60cda0',
      '#ed8884',
      '#ff9f7f',
      '#0096ff',
      '#9fe6b8',
      '#32c5e9',
      '#1d9dff',
    ],
    tooltip: {
      trigger: 'item',
      ...commonTooltip,
      formatter: `{a}<br />{b}：{c}（{d}%）`,
    },
    legend: {
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 10,
      },
    },
    series: [
      {
        name: '点位统计',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '42%'],
        roseType: 'radius',
        label: {
          fontSize: 10,
          color: 'normal',
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 8,
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' },
        ],
      },
    ],
  };

  echartsInit('.right-pie .chart', option);
})();
