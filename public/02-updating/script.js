// Updating the elements with new data

window.onload = () => {

  // define two sets of data
  let dataset1 = [1, 2, 3, 4, 5];
  let dataset2 = [6, 7, 8, 9];

  // create a d3 selection from the body element
  let body = d3.select('body');

  // create a d3 selection from paragraphs inside the body
  let paragraphs = body.selectAll('p');

  // define a function for updating a paragraphs with data
  let paragraphUpdate = (data) => {

    // create an update selection joining the given data to our paragraphs
    let updateParagraphs = paragraphs.data(data);

    // remove elements that are not needed to represent the data 
    updateParagraphs.exit().remove();

    // create new elements if needed and merge this selection with existing selection
    paragraphs = updateParagraphs.enter().append('p').merge(updateParagraphs);

    // update the text of every element
    paragraphs.text(d => d);

  };

  // set the initial data
  paragraphUpdate(dataset1);

  // clicking the window updates the paragraph with another dataset which can be of another size
  window.onclick = () => paragraphUpdate(dataset2);

};
