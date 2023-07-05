const BASE_URL = "https://datagroups.fundamentos-29.repl.co";
const mainContainerHTML = document.querySelector(".main__container");

async function getApi() {
  try {
    const data = await fetch(BASE_URL);
    const res = await data.json();
    return res;
  } catch (error) {
    return error, "aquí hay un error";
  }
}

async function main() {
  const gruops = await getApi();
  drawGroups(gruops);
}

function drawGroups(gruops) {
  let html = "";

  for (const { title, subGroups, color } of gruops) {
    html += `
        <div class="group__list" style="border: solid 5px ${color}">
            <h2 style="color: ${color}">${title}</h2>
            <div class="subGroup" style="border: solid 5px ${color}">
            ${drawSubGroups(subGroups, color)}
            
            </div>
        </div>`;
  }
  mainContainerHTML.innerHTML = html;
  
}

function drawSubGroups(subGroupsArr, color) {
  let htmlSub = "";

  for (const {title, participants} of subGroupsArr) {
        htmlSub += `
                    <h3>${title}</h3>
                    <div class="list__subGroup">
                    ${drawParticpants(participants, color)}
                    </div>`
  }
  return htmlSub
}

function drawParticpants(participantsDraw, color) {
    let htmlParticipants = "";

        for(const {name, email} of participantsDraw) {
            htmlParticipants += `
                <div class="name__participants" style="border: solid 3px ${color}; --color-hover: ${color}">
                <h3>${name}</h3>
                <p>${email}</p>
                </div>`
        }
    return htmlParticipants
}

main();

