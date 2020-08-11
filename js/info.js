
let unitComponent = ["coution this array start from 1",
                     "This unit describes the skills and knowledge required to participate in work health and safety (WHS) communication and consultation processes.",
                     
                     "This unit describes the skills and knowledge required to determine client business system requirements and verify the accuracy of the information gathered. It applies to information and communications technology (ICT) personnel who are required to analyse client expectations and needs, and recommend business system changes.",
                     
                     "This unit describes the skills and knowledge required to design a website to specifications, within a particular technical and human interface environment. This unit applies to individuals who are responsible for analysis, documentation and design, including identifying the technical and human computer interface requirements that drive design.",
                     
                     "This unit describes the skills and knowledge required to determine a client’s current and future internet service providers (ISPs) needs. It applies to individuals working in information and communications technology (ICT) who take responsibility for comparing and evaluating internet service provider (ISP) services, and are technically adept and proficient communicators, with a broad knowledge of internet technologies.",
                     
                     "This unit describes the skills and knowledge required to transfer content, from a remote location to a web server, using a range of commercial information and communications technology (ICT) products. The objective is the successful upload of new, or revised, information on a website. It applies to individuals who are required to update websites.",
                     
                     "This unit describes the skills and knowledge required to use a text editor to design, create and save web pages to a given specification, rather than using an authoring tool. It applies to individuals working as web designers and developers who interpret client briefs, generate a framework for internet information, and are resourceful in their application of technology in using a markup language.",
                     
                     "This unit describes the skills and knowledge required to develop interactive and engaging websites, using a range of features from various, appropriate languages. It applies to individuals working in web development environments who are required to produce client-side scripts as a common means of creating interactive websites. These scripts offer an effective simple means of enabling websites to provide greater interaction with clients.",
                     
                     "This unit describes the skills and knowledge required to successfully develop and integrate social networking code into new and existing websites. It applies to individuals working as web developers who apply a wide range of knowledge and skills across a range of general information and communications technology (ICT) environments and support small to medium enterprises (SMEs) that require broader, rather than more specialised, ICT support.",
                     
                     "This unit describes the skills and knowledge required to scope web page requirements, and to create and implement designs. It applies to individuals working as web designers and web developers, who apply a wide range of knowledge and skills for basic web development.",
                     
                     "This unit describes the skills and knowledge required to build a basic website, consistent with the design, technical requirements and expectations, of a client’s business, using current industry software and tools. It applies to individuals working as web developers who use a wide range of knowledge and skills across a range of general information and communications technology (ICT) environments, and support small to medium enterprises (SMEs) that require broader, rather than more specialised, ICT support.",
                     
                     "This unit describes the skills and knowledge required to use web development software to create website content. The unit is designed to use a web-authoring tool to convert text and images to the appropriate web protocols. It applies to individuals employed as web developers who are responsible for developing websites using client data.",
                     
                     "This unit describes the skills and knowledge required to design and create basic markup language documents and cascading style sheets (CSS) in order to define the structure and style of a website. It applies to individuals in ICT roles who are required to create web pages with consistency in appearance and user experience.",
                     
                     "This unit describes the skills and knowledge required to design, develop and test a database in order to meet a specification. It applies to individuals who may be either database, or web designers, required to create a simple database to store information for an online application, using a simple entity relational database.",
                     
                     "This unit describes the skills and knowledge required to produce structured query language (SQL) statements to work with server-side scripts, enabling web designers to interact with web server databases. It applies to individuals who are employed as web designers responsible for creating server-side interaction with dynamic web pages, using SQL as a means of communicating with the database.",
                     
                     "This unit describes the skills and knowledge required to monitor website traffic and to compile traffic reports as specified. It applies to individuals who are required to maintain websites.",
                     
                     "This unit describes the skills and knowledge required to create and implement, good internet-marketing practices using search engine optimisation (SEO) techniques, including introducing web pages to search engines, and monitoring search engine performance. It applies to individuals who make recommendations and monitor keyword enhancements, search engine marketing (SEM) and social network marketing (SNM).",
                     
                   "This unit describes the skills and knowledge required to maintain professional and ethical conduct, as well as to ensure that personal information of stakeholders is handled in a confidential and professional manner when dealing with stakeholders in an information and communications technology (ICT) environment. It applies to ICT personnel who are required to gather information to determine the organisation’s code of ethics, and protect and maintain privacy policies and system security.",
                     
                   "This unit describes the skills and knowledge required to ensure that a website is accessible to users with auditory, visual, mobility, and cognitive impairments, and those people who use assistive technology. It applies to individuals who use analysis and technical skills, to build and test websites.",
                     
                    "This unit describes the skills and knowledge required to apply the principles of accessibility and equity in the context of website development. It applies to individuals who are proficient communicators and who provide frontline technical support for ensuring that websites are accessible to end users.",
                     
                    "This unit describes the skills and knowledge required to provide basic website server, and protocol security appropriate to the level required by an organisation. It applies to individuals employed as web maintenance staff who are required to ensure that a website meets basic security requirements.",
                     
                    "This unit describes the skills and knowledge required to ensure, and maintain, the security of a dynamic commercial website. It applies to individuals working as website developers responsible for security of dynamic websites, who are proficient communicators and can analyse technical data capably and with efficiency.",
                     
                     "This unit describes the skills and knowledge required to ensure, and maintain, the security of a dynamic commercial website. It applies to individuals working as website developers responsible for security of dynamic websites, who are proficient communicators and can analyse technical data capably and with efficiency.",
                     
                     
                    ]


let info = document.querySelectorAll('.fa-info-circle');
let modal = document.querySelector('#modal');
let close = document.querySelector('.modal-x');

let infoTitle = document.querySelector('.tafe-unit-number');
let infoContent = document.querySelector('#modal p');


function openModal(){
 modal.style.display = "block";
}
function closeModalInfo(){
   modal.style.display = "none"; 
}

function modalContent(unit, unitCaption){
    openModal();
    infoTitle.innerHTML = "Unit - " + unit;
    infoContent.innerHTML = unitComponent[unitCaption];
}

//get the value of the unit number
function getInfo(event){

    let unitNumber = event.target.getAttribute("title")
    let unitCaption = event.target.getAttribute("value")
    console.log(unitNumber);
    console.log(unitCaption);
    modalContent(unitNumber, unitCaption);
    

}




//add event listner to info icons
info.forEach(element => {
    element.addEventListener('click', function(event){getInfo(event)});
})

close.addEventListener('click', function(){closeModalInfo()});

//close modal when user click outside of the box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

