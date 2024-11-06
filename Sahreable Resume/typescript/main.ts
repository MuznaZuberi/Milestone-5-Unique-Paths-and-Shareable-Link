const Form = document.getElementById("shareable-resume")as HTMLFormElement;
const cvShowcaseElement = document.getElementById("Curriculum-Vitae")as HTMLDivElement;
const ShareableLinkElement = document.getElementById("Username-based-Links")as HTMLDivElement;
const SharelinkElement = document.getElementById("share-link")as HTMLAnchorElement;
const PDFfileElement = document.getElementById("PDF file")as HTMLButtonElement;


Form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value
    const contact = (document.getElementById("contact") as HTMLInputElement).value
    const location = (document.getElementById("location") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skill_one = (document.getElementById("skill_one") as HTMLInputElement).value
    const skill_two = (document.getElementById("skill_two") as HTMLInputElement).value
    const skill_three = (document.getElementById("skill_three") as HTMLInputElement).value
    const skill_four = (document.getElementById("skill_four") as HTMLInputElement).value




    const candidateDetails = {
        name,
        email,
        contact,
        location,
        education,
        experience,
        skill_one,
        skill_two,
        skill_three,
        skill_four

    };

    localStorage.setItem(name, JSON.stringify(candidateDetails));





    const profileHTML = `
    <img src="image/p-img.jpg" alt="profile-img" class="profile-img">
    <h2><b>𝕯𝖎𝖘𝖙𝖗𝖎𝖇𝖚𝖙𝖆𝖇𝖑𝖊 𝕻𝖗𝖔𝖋𝖎𝖑𝖊</b></h2>
    <br/>
    <h3>𝕻𝖊𝖗𝖘𝖔𝖓𝖆𝖑 𝕴𝖓𝖋𝖔𝖗𝖒𝖆𝖙𝖎𝖔𝖓</h3>
    <p>𝕹𝖆𝖒𝖊: <span contenteditable= "true">${name}</span></p>
    <p>𝕰𝖒𝖆𝖎𝖑:<span contenteditable= "true">${email}<span></p>
    <p>𝕮𝖔𝖓𝖙𝖆𝖈𝖙:<span contenteditable= "true">${contact}<span></p>
    <p>𝕷𝖔𝖈𝖆𝖙𝖎𝖔𝖓:<span contenteditable= "true">${location}<span></p>


    <br/>
    <h3>𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓</h3>
    <p>𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓: <contenteditable= "true">${education}</p>


    <br/>
    <h3>𝖂𝖔𝖗𝖐-𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊</h3>
    <p>𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊: <contenteditable= "true">${experience}</p>



    <br/>
     <h3>𝕾𝖐𝖎𝖑𝖑𝖘</h3>
    <p>. <contenteditable= "true">${skill_one}</p>
    <p>. <contenteditable= "true">${skill_two}</p>
    <p>. <contenteditable= "true">${skill_three}</p>
    <p>. <contenteditable= "true">${skill_four}</p>


    `;

    cvShowcaseElement.innerHTML = profileHTML;

    const Distributable_URL = `${window.location.origin}?name=${encodeURIComponent(name)}`;

    ShareableLinkElement.style.display = "block";
    SharelinkElement.href = Distributable_URL;
    SharelinkElement.textContent = Distributable_URL;



});



PDFfileElement.addEventListener('click', () => {
    window.print();
});



window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

if(name){
    const recordedCVInfo = localStorage.getItem(name);

    if(recordedCVInfo){
        const candidateDetails = JSON.parse(recordedCVInfo);
        (document.getElementById("name") as HTMLInputElement).value = name;

        (document.getElementById("name") as HTMLInputElement).value = candidateDetails.name;


        (document.getElementById("email") as HTMLInputElement).value = candidateDetails.email;


        (document.getElementById("contact") as HTMLInputElement).value = candidateDetails.school;


        (document.getElementById("location") as HTMLInputElement).value = candidateDetails.degree;


        (document.getElementById("education") as HTMLInputElement).value = candidateDetails.job;


        (document.getElementById("experience") as HTMLInputElement).value = candidateDetails.company;


        (document.getElementById("skill_one") as HTMLInputElement).value = candidateDetails.skills;
        (document.getElementById("skill_two") as HTMLInputElement).value = candidateDetails.skills;
        (document.getElementById("skill_three") as HTMLInputElement).value = candidateDetails.skills;
        (document.getElementById("skill_four") as HTMLInputElement).value = candidateDetails.skills;




    };
    };


});