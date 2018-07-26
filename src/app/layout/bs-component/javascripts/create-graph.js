/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/spanish-silver.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var years = [];
    var silverMinted = ["Planned"];
    var studiosPaid = ["Executed"];


	for (var i = 1; i < data.length; i++) {
		years.push(data[i][0]);
        silverMinted.push(data[i][2]);
        studiosPaid.push(data[i][1]);
	}

	console.log(years);
    console.log(silverMinted);
    console.log(studiosPaid);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	studiosPaid,silverMinted
	        ]
        },
        color: {
            pattern: ['#ff7f0e','#1f77b4',]
        },
	    axis: {
	        x: {
	            type: 'category',
	            categories: years,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
        },
        axis: {
            x: {
                label: {
                    text: 'X Label',
                    position: 'outer-center'
                }
                },
            y: {
                label: {
                    text: 'Y Label',
                    position: 'outer-middle'
                }

            }
        },

	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'bottom'
	    }
	});
}

parseData(createGraph);