//I referenced this codepen (https://codepen.io/mh0168a/pen/WNJgMgb) to help me with the js and the project overall

const entryForm = document.querySelector(`#entryForm`); //These are API's that will return the class that is called and assign it to a constant
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryURL = document.getElementsByClassName(`entry-text-url`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);
{
  href: 'example.org',
  textContent: parentElement.textContent
})
parentElement.textContent = ''
parentElement.appendChild(newElement)


function addEntryToDom(event) { //This function is created to be able to have multiple journal entries and for them to be formatted correctly
        event.preventDefault(); //This is an API that makes sure that something is entered in order for the function to work. If nothing is entered than nothing will happen
       
        const heading = document.createElement(`h2`); //This is for the section for the journal heading 
        heading.className = `heading-results`;
        entryResultRow.insertAdjacentElement(`beforebegin`, heading)

        const entryDiv = document.createElement(`div`); //This is for the section for the journal entry
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        const entryHeading = document.createElement(`h3`); //This is for the section for the journal entry again
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        const entryURL = document.createElement(`url`); //This is for the section for the journal entry image link
        entryURL.className = `single-entry-url`;
        entryURL.textContent = getEntryURL[0].value;
        entryDiv.appendChild(entryURL);
        getEntryURL[0].value = ``;
        

        const entryParagraph = document.createElement(`p`); //This is for the section for the journal body tect
        entryParagraph.className = `single-entry-text`;
        entryParagraph.textContent = getEntryText[0].value;
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = ``;
}

entryForm.addEventListener(`submit`, addEntryToDom);

//