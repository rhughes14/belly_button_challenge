
        function getPlots(id) {
            //Read samples.json
            d3.json("samples.json").then (sampledata =>{
                console.log(sampledata)
                var ids = sampledata.samples[0].otu_ids;
                console.log(ids)
                var sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
                console.log(sampleValues)
                var otu_labels =  sampledata.samples[0].otu_labels.slice(0,10);
                console.log (otu_labels)
                // get only top 10 otu ids 
                var otu_top = ( sampledata.samples[0].otu_ids.slice(0, 10)).reverse();
                // get the otu id's to the desired form
                var otu_id = otu_top.map(d => "otu " + d);
                console.log(`OTU IDS: ${otu_id}`)
                // get the top 10 labels
                var otu_labels =  sampledata.samples[0].otu_labels.slice(0,10);
                console.log(`otu_labels: ${otu_labels}`)
                var trace = {
                    x: sampleValues,
                    y: otu_id,
                    text: otu_labels,
                    marker: {
                        color: 'blue'},
                        type:"bar",
                        orientation: "h",
                    };
                // create data variable
                var data = [trace];
        
                // create layout variable 
                var layout = {
                    title: "Top 10 OTU",
                    yaxis:{
                        tickmode:"linear",
                    },
                    margin: {
                        l: 100,
                        r: 100,
                        t: 100,
                        b: 30
                    }
                };
                // create the bar plot
                Plotly.newPlot("bar", data, layout);
            });
        }
getPlots()        