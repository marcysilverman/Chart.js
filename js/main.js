const chart = document.getElementById('lineChart');
const barChart = document.getElementById('barChart');
const radarChart = document.getElementById('radarChart');
const pieChart = document.getElementById('pieChart');
let lineChart = new Chart(chart, {
  type: 'line',
  data: {
      labels: ['Dog', 'Cat', 'Bird', 'Reptile', 'Fish', 'Hamster'],
      datasets: [{
          label: '# of Votes',
          data: [30, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 159, 64, 1)'
          ]
      }, 
      {
            label: 'Average Age of Animals',
            data: [12, 14, 4, 12.3, 8, 3],
            backgroundColor: [
              'rgba(255, 159, 250, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
    }
  }
});

let barGraph = new Chart(barChart, {
  type: 'bar',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  reverse: true,
                  beginAtZero: true
              }
          }]
      }
  }
});

let radarGraph = new Chart(radarChart, {
  type: 'radar',
  data: {
      labels: ['Dog', 'Cat', 'Bird', 'Reptile'],
      datasets: [{
          label: '# of Votes',
          data: [30, 19, 3, 5],
          backgroundColor: [
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 159, 64, 1)'
          ]
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
    }
  }
});

let pieGraph = new Chart(pieChart, {
  type: 'pie', 
  data: {
    labels: ['Cake', 'Ice Cream', 'Cookies', 'Pie'],
    datasets: [{
      label: '# of votes', 
      data: [4, 10, 8, 12],
      backgroundColor: [
        '#E6E6FA',
        '#87CEFA',
        '#AFEEEE',
        '#FF8C00'
      ],
    }]
  }
});
