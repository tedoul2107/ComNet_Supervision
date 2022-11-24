var ctx = document.getElementById('equip').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Routeur', 'Switch', 'Point d\'accès', 'Serveur'],
        datasets: [{
            label: 'Equipements',
            data: [2, 1, 2, 2],
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)'
            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins : {
            datalabels : {
                anchor: 'end',
                align: 'top',
                formatter: Math.round,
                font: {
                    weight: 'bold',
                    size: 16
                }
            }
        }
    }
});
