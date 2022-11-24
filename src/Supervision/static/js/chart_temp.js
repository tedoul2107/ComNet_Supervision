var myConfig = {
      type: "gauge",
      globals: {
        fontSize: 25
      },
      plotarea: {
        marginTop: 80
      },
      plot: {
        size: '100%',
        valueBox: {
          placement: 'center',
          text: '%v', //default
          fontSize: 25,
          rules: [{
              rule: '%v <= 35',
              text: '%v°<br>Excellent'
            },
            {
              rule: '%v > 35 && %v < 50',
              text: '%v°<br>Bon'
            },
            {
              rule: '%v >= 50 && %v < 70',
              text: '%v°<br>Mauvais'
            },
            {
              rule: '%v >  70',
              text: '%v°<br>Très mauvais'
            }
          ]
        }
      },
      tooltip: {
        borderRadius: 5
      },
      scaleR: {
        aperture: 180,
        minValue: 10,
        maxValue: 100,
        step: 5,
        center: {
          visible: false
        },
        tick: {
          visible: true
        },
        item: {
          offsetR: 0,
          rules: [{
            rule: '%i == 10',
            offsetX: 15
          }]
        },
        labels: ['10°', '', '', '', '30°', '', '', '', '50°', '', '', '', '70°', '', '', '', '', '', '100°'],
        ring: {
          size: 50,
          rules: [{
              rule: '%v <= 35',
              backgroundColor: '#29B6F6'
            },
            {
              rule: '%v > 30 && %v < 50',
              backgroundColor: '#FFA726'
            },
            {
              rule: '%v >= 50 && %v < 70',
              backgroundColor: '#EF5350'
            },
            {
              rule: '%v >= 70',
              backgroundColor: '#E53935'
            }
          ]
        }
      },
      series: [{
        values: [27], // starting value
        backgroundColor: 'black',
        indicator: [10, 10, 10, 10, 0.75],
        animation: {
          effect: 2,
          method: 1,
          sequence: 4,
          speed: 3000
        },
      }]
    };

    zingchart.render({
      id: 'temp',
      data: myConfig,
      height: 350,
      width: '100%'
    });