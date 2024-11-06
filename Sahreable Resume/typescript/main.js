"use strict";
const Form = document.getElementById("shareable-resume");
const cvShowcaseElement = document.getElementById("Curriculum-Vitae");
const ShareableLinkElement = document.getElementById("Username-based-Links");
const SharelinkElement = document.getElementById("share-link");
const PDFfileElement = document.getElementById("PDF file");
Form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const location = document.getElementById("location").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skill_one = document.getElementById("skill_one").value;
    const skill_two = document.getElementById("skill_two").value;
    const skill_three = document.getElementById("skill_three").value;
    const skill_four = document.getElementById("skill_four").value;
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
    if (name) {
        const recordedCVInfo = localStorage.getItem(name);
        if (recordedCVInfo) {
            const candidateDetails = JSON.parse(recordedCVInfo);
            document.getElementById("name").value = name;
            document.getElementById("name").value = candidateDetails.name;
            document.getElementById("email").value = candidateDetails.email;
            document.getElementById("contact").value = candidateDetails.school;
            document.getElementById("location").value = candidateDetails.degree;
            document.getElementById("education").value = candidateDetails.job;
            document.getElementById("experience").value = candidateDetails.company;
            document.getElementById("skill_one").value = candidateDetails.skills;
            document.getElementById("skill_two").value = candidateDetails.skills;
            document.getElementById("skill_three").value = candidateDetails.skills;
            document.getElementById("skill_four").value = candidateDetails.skills;
        }
        ;
    }
    ;
});
