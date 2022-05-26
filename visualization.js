Chart.register(ChartDataLabels);
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels : [2017, 2018, 2019, 2020, 2021],
    datasets: [
      { 
          label : "Jumlah Perusahaan",
        borderColor: 'rgb(75, 192, 192)',
        data : [34021, 35862, 21432, 22989, 39565],
        datalabels: {
          align : 'bottom'
        },
        tension : 0.4
      }
    ]
  },
  options: {
  },
});

var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels : [2017, 2018, 2019, 2020, 2021],
    datasets: [
      { 
      label : "Jumlah Tender",
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
        ],
        borderWidth: 1,
        data : [781, 951, 678, 603, 808],
        datalabels: {
          align : 'top'
        },
      }
    ]
  },
  options: {
      scales: {
        yAxes: [{
            ticks: {
                min: 500,
                max: 1000
            }
        }]
    }
  }
});

// Grafik jumlah tender tiap jenus pengadaan
var ctx = document.getElementById("chart_pie");
var chart_pie = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
        'Pengadaan Barang',
        'Pekerjaan Konstruksi',
        'Jasa Konsultasi Badan Usaha',
        'Jasa Lainnya'
    ],
    datasets: [
      { 
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
        ],
        data : [1185, 758, 415, 1471],
        borderAlign : 'middle',
        datalabels: {
            color : 'black'
        },
      }
    ]
  },
  options: {
      responsive: false,
      maintainAspectRatio: true,
      showScale: false
  }
});

// Grafik jumlah tender selesai dan tender batal
var ctx = document.getElementById('tenderChart');

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels : [2017, 2018, 2019, 2020, 2021],
    datasets: [
      {
          label: 'Tender Selesai',
        backgroundColor: "lightblue",
        data: [733, 899, 503, 585, 655],
        datalabels: {
            color : 'black'
        },
      },
      {
          label: 'Tender Batal',
        backgroundColor: "grey",
        data: [48, 52, 175, 18, 153],
        datalabels: {
            color : 'blue'
        },
      }

    ] 
  },
  options: {
      barValueSpacing: 20,
      scales: {
          yAxes: [{
              ticks: {
                  min: 0,
                  max: 1100
              }
          }]
      },
  }
});
