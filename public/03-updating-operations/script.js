// Updating the elements with new data

// define a function for returning random numeric data for demonstration purposes
let randomData = () => {

  // this helper function returns random numbers between 0-10
  let random = () => Math.round(Math.random() * 10);
  
  // let's first get random number to be the length of data
  let arrayLength = random();

  // we construct a new array with random numbers
  return Array.from(new Array(arrayLength), random);

};

window.onload = () => {

  // create a d3 selection from the body element, disable the default behavior of highlighting text for this demo 
  let body = d3.select('body').style('user-select', 'none');

  // create a d3 selection from paragraphs inside the body
  let paragraphs = body.selectAll('p');

  // define a function for updating a paragraphs with data
  let paragraphUpdate = (data) => {

    // create an update selection joining the given data to our paragraphs, using the data as key instead of index
    let updateParagraphs = paragraphs.data(data, d => d);

    // the elements that are not needed to represent the data are colored by using transition and in the end removed
    updateParagraphs.exit().transition().style('color', 'red').remove();

    // create new elements if needed
    let newParagraphs = updateParagraphs.enter().append('p').text(d => d);

    // highlight new elements using transition
    newParagraphs.style('color', 'cyan').transition().style('color', 'black');

    // merge new selection with existing selection
    paragraphs = newParagraphs.merge(updateParagraphs);

  };

  // clicking the window updates the paragraph with random data
  window.onclick = () => paragraphUpdate(randomData());

};
