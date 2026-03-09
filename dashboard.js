const mainContainer = document.getElementById('mainContainer');
const issuesCount = document.getElementById('issuesCount');
const all = document.getElementById('all');
const open = document.getElementById('open');
const close = document.getElementById('close');
const userTextUserInput = document.getElementById('userTextUserInput');
const myModal = document.getElementById('myModal');
const loadingBars = document.getElementById('loadingBars');

function loadingHide() {
    loadingBars.classList.add('hidden')
}
function loadingShow() {
    loadingBars.classList.remove('hidden')
}

function openModal(id) {
    async function loadModalData() {
        loadingShow();
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
        const data = await res.json();
        const titleModal = document.getElementById('titleModal');
        const statusModal = document.getElementById('statusModal');
        const authorModal = document.getElementById('authorModal');
        const createdAtModal = document.getElementById('createdAtModal');
        const date = data.data.createdAt;
        const dateFormat = new Date(date);
        const dateFormatModal = dateFormat.toLocaleDateString('en-GB');
        const labelsModal = document.getElementById('labelsModal');
        const labelsModal2 = document.getElementById('labelsModal2');
        const labelsModal2Div = document.getElementById('labelsModal2Div');
        const descriptionModal = document.getElementById('descriptionModal');
        const assigneeModal = document.getElementById('assigneeModal');
        const priorityModal = document.getElementById('priorityModal');

        titleModal.innerText = data.data.title;
        statusModal.innerText = data.data.status.toUpperCase();
        authorModal.innerText = data.data.status + ' by ' + data.data.author;
        createdAtModal.innerText = dateFormatModal;
        labelsModal.innerText = data.data.labels[0] ? data.data.labels[0].toUpperCase() : '';
        labelsModal2.innerText = data.data.labels[1] ? data.data.labels[1].toUpperCase() : '';
        descriptionModal.innerText = data.data.description;
        priorityModal.innerText = data.data.priority.toUpperCase();
        labelsModal2Div.classList = data.data.labels[1] ? "border border-[#FDE68A] rounded-full px-2 py-1" : "hidden";

        if (data.data.assignee) {
            assigneeModal.innerText = data.data.assignee;
        } else {
            assigneeModal.innerText = '';
        }

    }
    myModal.showModal();
    loadModalData();
    loadingHide();
}

// {/* <button class="btn" onclick="my_modal_1.showModal()">open modal</button>  */ }

// Search function Responsive
document.getElementById('searchBtn')
    .addEventListener('click', function () {
        async function loadSearchData() {
            loadingShow();
            const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
            const data = await res.json();
            const searchText = userTextUserInput.value
            console.log(searchText);
            const searchData = data.data.filter(data => data.title.toLowerCase().includes(searchText.toLowerCase().trim()));

            issuesCount.innerText = searchData.length;


            mainContainer.innerHTML = '';
            searchData.forEach(element => {
                const div = document.createElement('div');
                div.onclick = () => {
                    openModal(element.id)
                };

                let imageStatus = "";
                if (element.status === 'open') {
                    div.classList = 'card border-t-4 border-t-[#00A96E] bg-white p-4 space-y-4';
                    imageStatus = "assets/Open-Status.png";
                } else {
                    div.classList = 'card border-t-4 border-t-[#A855F7] bg-white p-4 space-y-4';
                    imageStatus = "assets/Closed-Status.png";
                }

                let priorityBg = '';
                let priorityTextColor = '';
                if (element.priority === 'high') {
                    priorityBg = 'bg-[#FEECEC]';
                    priorityTextColor = 'text-[#EF4444]';
                } else if (element.priority === 'medium') {
                    priorityBg = 'bg-[#FFF6D1]';
                    priorityTextColor = 'text-[#F59E0B]';
                } else if (element.priority === 'low') {
                    priorityBg = 'bg-[#EEEFF2]';
                    priorityTextColor = 'text-[#9CA3AF]';
                }

                let labelsTextColor = '';
                let labelsBorder = '';

                if (element.labels[0] === 'enhancement') {
                    labelsTextColor = 'text-[#00A96E]';
                    labelsBorder = 'border-[#BBF7D0]';
                } else {
                    priorityTextColor = 'text-[#EF4444]';
                    labelsBorder = 'border-[#FECACA]';

                }

                const date = element.createdAt;
                const dateFormat = new Date(date);
                const dateFormated = dateFormat.toLocaleDateString('en-GB');


                div.innerHTML = `
        <div class="flex justify-between items-center">
                    <img src="${imageStatus}" alt="">
                    <h1  class="${priorityBg} ${priorityTextColor} px-3 rounded-full">${element.priority.toUpperCase()}</h1>
                </div>
                <div class="space-y-3">
                    <h1 class="font-semibold text-[1rem]">${element.title}</h1>
                    <h2 class="text-[#64748B] text-[12px]">${element.description}</h2>
                </div>
                <div class="flex gap-3">
                    <div class="border ${labelsBorder} rounded-full px-2 py-1">
                        <p class="text-[0.6rem] ${labelsTextColor}">
                            <i class="fa-solid fa-bug"></i> ${element.labels[0].toUpperCase()}</p>
                    </div>

                   ${element.labels[1] ? ` <div class="border border-[#FDE68A] rounded-full px-2 py-1">
                    <p class="text-[0.6rem] text-[#D97706]">
                    <i class="fa-solid fa-life-ring"></i> ${element.labels[1].toUpperCase()} </p> </div>` : ""}

                </div>
                <div class="opacity-30"><hr></div>
                <div class="">
                    <p><small class="text-[#64748B]">${element.assignee}</small></p>
                    <p><small class="text-[#64748B]">${dateFormated}</small></p>
                </div> 
                `;

                mainContainer.appendChild(div);
            });

        }
        // =======================================end
        loadSearchData();
        loadingHide();
    });

// ALL Button, Open Button and Closed Button Responsive
function switchTab(tab) {
    if (tab === 'all') {
        all.classList = "btn btn-primary";
        open.classList = "btn";
        close.classList = "btn";
        loadAllData();
    } else if (tab === 'open') {
        all.classList = "btn";
        open.classList = "btn btn-primary";
        close.classList = "btn";
        loadOpenData();
    } else if (tab === 'close') {
        all.classList = "btn";
        open.classList = "btn";
        close.classList = "btn btn-primary";
        loadCloseData();
    }
};

// Close Data loaded function from API 
async function loadCloseData() {
    loadingShow();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    const closedData = data.data.filter(data => data.status === 'closed');

    issuesCount.innerText = closedData.length

    mainContainer.innerHTML = '';
    closedData.forEach(element => {

        const div = document.createElement('div');
        div.onclick = () => {
            openModal(element.id)
        };

        let imageStatus = "";
        if (element.status === 'open') {
            div.classList = 'card border-t-4 border-t-[#00A96E] bg-white p-4 space-y-4';
            imageStatus = "assets/Open-Status.png";
        } else {
            div.classList = 'card border-t-4 border-t-[#A855F7] bg-white p-4 space-y-4';
            imageStatus = "assets/Closed-Status.png";
        }

        let priorityBg = '';
        let priorityTextColor = '';
        if (element.priority === 'high') {
            priorityBg = 'bg-[#FEECEC]';
            priorityTextColor = 'text-[#EF4444]';
        } else if (element.priority === 'medium') {
            priorityBg = 'bg-[#FFF6D1]';
            priorityTextColor = 'text-[#F59E0B]';
        } else if (element.priority === 'low') {
            priorityBg = 'bg-[#EEEFF2]';
            priorityTextColor = 'text-[#9CA3AF]';
        }

        let labelsTextColor = '';
        let labelsBorder = '';

        if (element.labels[0] === 'enhancement') {
            labelsTextColor = 'text-[#00A96E]';
            labelsBorder = 'border-[#BBF7D0]';
        } else {
            priorityTextColor = 'text-[#EF4444]';
            labelsBorder = 'border-[#FECACA]';

        }

        const date = element.createdAt;
        const dateFormat = new Date(date);
        const dateFormated = dateFormat.toLocaleDateString('en-GB');


        div.innerHTML = `
        <div class="flex justify-between items-center">
                    <img src="${imageStatus}" alt="">
                    <h1  class="${priorityBg} ${priorityTextColor} px-3 rounded-full">${element.priority.toUpperCase()}</h1>
                </div>
                <div class="space-y-3">
                    <h1 class="font-semibold text-[1rem]">${element.title}</h1>
                    <h2 class="text-[#64748B] text-[12px]">${element.description}</h2>
                </div>
                <div class="flex gap-3">
                    <div class="border ${labelsBorder} rounded-full px-2 py-1">
                        <p class="text-[0.6rem] ${labelsTextColor}">
                            <i class="fa-solid fa-bug"></i> ${element.labels[0].toUpperCase()}</p>
                    </div>

                   ${element.labels[1] ? ` <div class="border border-[#FDE68A] rounded-full px-2 py-1">
                    <p class="text-[0.6rem] text-[#D97706]">
                    <i class="fa-solid fa-life-ring"></i> ${element.labels[1].toUpperCase()} </p> </div>` : ""}

                </div>
                <div class="opacity-30"><hr></div>
                <div class="">
                    <p><small class="text-[#64748B]">${element.assignee}</small></p>
                    <p><small class="text-[#64748B]">${dateFormated}</small></p>
                </div> 
                `;

        mainContainer.appendChild(div);
    });
    loadingHide();
}


// Open Data loaded function from API 
async function loadOpenData() {
    loadingShow();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    const openData = data.data.filter(data => data.status === 'open');

    issuesCount.innerText = openData.length

    mainContainer.innerHTML = '';
    openData.forEach(element => {

        const div = document.createElement('div');
        div.onclick = () => {
            openModal(element.id)
        };

        let imageStatus = "";
        if (element.status === 'open') {
            div.classList = 'card border-t-4 border-t-[#00A96E] bg-white p-4 space-y-4';
            imageStatus = "assets/Open-Status.png";
        } else {
            div.classList = 'card border-t-4 border-t-[#A855F7] bg-white p-4 space-y-4';
            imageStatus = "assets/Closed-Status.png";
        }

        let priorityBg = '';
        let priorityTextColor = '';
        if (element.priority === 'high') {
            priorityBg = 'bg-[#FEECEC]';
            priorityTextColor = 'text-[#EF4444]';
        } else if (element.priority === 'medium') {
            priorityBg = 'bg-[#FFF6D1]';
            priorityTextColor = 'text-[#F59E0B]';
        } else if (element.priority === 'low') {
            priorityBg = 'bg-[#EEEFF2]';
            priorityTextColor = 'text-[#9CA3AF]';
        }

        let labelsTextColor = '';
        let labelsBorder = '';

        if (element.labels[0] === 'enhancement') {
            labelsTextColor = 'text-[#00A96E]';
            labelsBorder = 'border-[#BBF7D0]';
        } else {
            priorityTextColor = 'text-[#EF4444]';
            labelsBorder = 'border-[#FECACA]';

        }

        const date = element.createdAt;
        const dateFormat = new Date(date);
        const dateFormated = dateFormat.toLocaleDateString('en-GB');


        div.innerHTML = `
        <div class="flex justify-between items-center">
                    <img src="${imageStatus}" alt="">
                    <h1  class="${priorityBg} ${priorityTextColor} px-3 rounded-full">${element.priority.toUpperCase()}</h1>
                </div>
                <div class="space-y-3">
                    <h1 class="font-semibold text-[1rem]">${element.title}</h1>
                    <h2 class="text-[#64748B] text-[12px]">${element.description}</h2>
                </div>
                <div class="flex gap-3">
                    <div class="border ${labelsBorder} rounded-full px-2 py-1">
                        <p class="text-[0.6rem] ${labelsTextColor}">
                            <i class="fa-solid fa-bug"></i> ${element.labels[0].toUpperCase()}</p>
                    </div>

                   ${element.labels[1] ? ` <div class="border border-[#FDE68A] rounded-full px-2 py-1">
                    <p class="text-[0.6rem] text-[#D97706]">
                    <i class="fa-solid fa-life-ring"></i> ${element.labels[1].toUpperCase()} </p> </div>` : ""}

                </div>
                <div class="opacity-30"><hr></div>
                <div class="">
                    <p><small class="text-[#64748B]">${element.assignee}</small></p>
                    <p><small class="text-[#64748B]">${dateFormated}</small></p>
                </div> 
                `;

        mainContainer.appendChild(div);
    });
    loadingHide();
}

// ALL Data loaded function from API 
async function loadAllData() {
    loadingShow();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    issuesCount.innerText = data.data.length;

    mainContainer.innerHTML = '';
    data.data.forEach(element => {

        const div = document.createElement('div');
        div.onclick = () => {
            openModal(element.id)
        };

        let imageStatus = "";
        if (element.status === 'open') {
            div.classList = 'card border-t-4 border-t-[#00A96E] bg-white p-4 space-y-4';
            imageStatus = "assets/Open-Status.png";
        } else {
            div.classList = 'card border-t-4 border-t-[#A855F7] bg-white p-4 space-y-4';
            imageStatus = "assets/Closed-Status.png";
        }

        let priorityBg = '';
        let priorityTextColor = '';
        if (element.priority === 'high') {
            priorityBg = 'bg-[#FEECEC]';
            priorityTextColor = 'text-[#EF4444]';
        } else if (element.priority === 'medium') {
            priorityBg = 'bg-[#FFF6D1]';
            priorityTextColor = 'text-[#F59E0B]';
        } else if (element.priority === 'low') {
            priorityBg = 'bg-[#EEEFF2]';
            priorityTextColor = 'text-[#9CA3AF]';
        }

        let labelsTextColor = '';
        let labelsBorder = '';

        if (element.labels[0] === 'enhancement') {
            labelsTextColor = 'text-[#00A96E]';
            labelsBorder = 'border-[#BBF7D0]';
        } else {
            priorityTextColor = 'text-[#EF4444]';
            labelsBorder = 'border-[#FECACA]';

        }

        const date = element.createdAt;
        const dateFormat = new Date(date);
        const dateFormated = dateFormat.toLocaleDateString('en-GB');

        div.innerHTML = `
        <div class="flex justify-between items-center">
                    <img src="${imageStatus}" alt="">
                    <h1 class="${priorityBg} ${priorityTextColor} px-3 rounded-full">${element.priority.toUpperCase()}</h1>
                </div>
                <div class="space-y-3">
                    <h1 class="font-semibold text-[1rem]">${element.title}</h1>
                    <h2 class="text-[#64748B] text-[12px]">${element.description}</h2>
                </div>
                <div class="flex gap-3">
                    <div class="border ${labelsBorder} rounded-full px-2 py-1">
                        <p class="text-[0.6rem] ${labelsTextColor}">
                            <i class="fa-solid fa-bug"></i> ${element.labels[0].toUpperCase()}</p>
                    </div>

                   ${element.labels[1] ? ` <div class="border border-[#FDE68A] rounded-full px-2 py-1">
                    <p class="text-[0.6rem] text-[#D97706]">
                    <i class="fa-solid fa-life-ring"></i> ${element.labels[1].toUpperCase()} </p> </div>` : ""}

                </div>
                <div class="opacity-30"><hr></div>
                <div class="">
                    <p><small class="text-[#64748B]">${element.assignee}</small></p>
                    <p><small class="text-[#64748B]">${dateFormated}</small></p>
                </div> 
                `;

        mainContainer.appendChild(div);

    });
    loadingHide();
}

// ALL Data function by default call
loadAllData();
