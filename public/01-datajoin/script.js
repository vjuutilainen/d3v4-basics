// Joining data to elements using D3 and JavaScript ES2015 syntax

// when window has loaded
window.onload = () => {

  // sample data
  let data = [1, 2, 3, 4, 5];

  // create a d3 selection from the body element
  let body = d3.select('body');

  // create a d3 selection, joining data to paragraphs inside the body
  let dataParagraphs = body.selectAll('p').data(data);

  // for every item of data, create a paragraph element and use the data as text
  dataParagraphs.enter().append('p').text(d => d);

};
