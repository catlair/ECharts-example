(function () {
  const myChart = echarts.init(document.querySelector('.left-bar .chart'));

  const option = {
    //设置柱子颜色
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      textStyle: {
        color: '#fff',
      },
      backgroundColor: '#272a3780',
      borderWidth: 0,
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
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5,
        },
      },
    ],
  };

  myChart.setOption(option);

  window.addEventListener('resize', () => {
    myChart.resize();
  });
})();

(function () {
  const myChart = echarts.init(document.querySelector('.right-bar .chart'));
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
  myChart.setOption(option);

  window.addEventListener('resize', () => {
    myChart.resize();
  });
})();

(function () {
  const myChart = echarts.init(document.querySelector('.left-line .chart'));
  const option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        color: '#fff',
        fontWeight: 400,
      },
      backgroundColor: '#272a37aa',
      borderWidth: 0,
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

  myChart.setOption(option);

  window.addEventListener('resize', () => {
    myChart.resize();
  });
})();
