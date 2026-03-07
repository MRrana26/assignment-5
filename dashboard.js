const mainContainer = document.getElementById('mainContainer');
const issuesCount = document.getElementById('issuesCount');
const all = document.getElementById('all');
const open = document.getElementById('open');
const close = document.getElementById('close');


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


async function loadCloseData() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    const closedData = data.data.filter(data => data.status === 'closed');

    issuesCount.innerText = closedData.length

    mainContainer.innerHTML = '';
    closedData.forEach(element => {

        const div = document.createElement('div');

        let imageStatus = "";
        if (element.status === 'open') {
            div.classList = 'card border-t-4 border-t-[#00A96E] bg-white p-4 space-y-4';
            imageStatus = "assets/Open-Status.png";
        } else {
            div.classList = 'card border-t-4 border-t-[#A855F7] bg-white p-4 space-y-4';
            imageStatus = "assets/Closed-Status.png";
        }
        const date = new Date(element.createdAt);


        div.innerHTML = `
        <div class="flex justify-between items-center">
                    <img src="${imageStatus}" alt="">
                    <h1  class="text-[#EF4444]">${element.priority.toUpperCase()}</h1>
                </div>
                <div class="space-y-3">
                    <h1 class="font-semibold text-[1rem]">${element.title}</h1>
                    <h2 class="text-[#64748B] text-[12px]">${element.description}</h2>
                </div>
                <div class="flex gap-3">
                    <div class="border border-[#FECACA] rounded-full px-2 py-1">
                        <p class="text-[0.6rem] text-[#EF4444]">
                            <i class="fa-solid fa-bug"></i> ${element.labels[0].toUpperCase()}</p>
                    </div>

                   ${element.labels[1] ? ` <div class="border border-[#FDE68A] rounded-full px-2 py-1">
                    <p class="text-[0.6rem] text-[#D97706]">
                    <i class="fa-solid fa-life-ring"></i> ${element.labels[1].toUpperCase()} </p> </div>` : ""}

                </div>
                <div class="opacity-30"><hr></div>
                <div class="">
                    <p><small class="text-[#64748B]">${element.assignee}</small></p>
                    <p><small class="text-[#64748B]">${date}</small></p>
                </div> 
                `;

        mainContainer.appendChild(div);
    });


    console.log(openData)
    
}

async function loadOpenData() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    const openData = data.data.filter(data => data.status === 'open');

    issuesCount.innerText = openData.length

    mainContainer.innerHTML = '';
    openData.forEach(element => {

        const div = document.createElement('div');

        let imageStatus = "";
        if (element.status === 'open') {
            div.classList = 'card border-t-4 border-t-[#00A96E] bg-white p-4 space-y-4';
            imageStatus = "assets/Open-Status.png";
        } else {
            div.classList = 'card border-t-4 border-t-[#A855F7] bg-white p-4 space-y-4';
            imageStatus = "assets/Closed-Status.png";
        }
        const date = new Date(element.createdAt);


        div.innerHTML = `
        <div class="flex justify-between items-center">
                    <img src="${imageStatus}" alt="">
                    <h1  class="text-[#EF4444]">${element.priority.toUpperCase()}</h1>
                </div>
                <div class="space-y-3">
                    <h1 class="font-semibold text-[1rem]">${element.title}</h1>
                    <h2 class="text-[#64748B] text-[12px]">${element.description}</h2>
                </div>
                <div class="flex gap-3">
                    <div class="border border-[#FECACA] rounded-full px-2 py-1">
                        <p class="text-[0.6rem] text-[#EF4444]">
                            <i class="fa-solid fa-bug"></i> ${element.labels[0].toUpperCase()}</p>
                    </div>

                   ${element.labels[1] ? ` <div class="border border-[#FDE68A] rounded-full px-2 py-1">
                    <p class="text-[0.6rem] text-[#D97706]">
                    <i class="fa-solid fa-life-ring"></i> ${element.labels[1].toUpperCase()} </p> </div>` : ""}

                </div>
                <div class="opacity-30"><hr></div>
                <div class="">
                    <p><small class="text-[#64748B]">${element.assignee}</small></p>
                    <p><small class="text-[#64748B]">${date}</small></p>
                </div> 
                `;

        mainContainer.appendChild(div);
    });


    console.log(openData)
    
}




async function loadAllData() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    issuesCount.innerText = data.data.length

    mainContainer.innerHTML = '';
    data.data.forEach(element => {

        const div = document.createElement('div');

        let imageStatus = "";
        if (element.status === 'open') {
            div.classList = 'card border-t-4 border-t-[#00A96E] bg-white p-4 space-y-4';
            imageStatus = "assets/Open-Status.png";
        } else {
            div.classList = 'card border-t-4 border-t-[#A855F7] bg-white p-4 space-y-4';
            imageStatus = "assets/Closed-Status.png";
        }
        const date = new Date(element.createdAt);


        div.innerHTML = `
        <div class="flex justify-between items-center">
                    <img src="${imageStatus}" alt="">
                    <h1  class="text-[#EF4444]">${element.priority.toUpperCase()}</h1>
                </div>
                <div class="space-y-3">
                    <h1 class="font-semibold text-[1rem]">${element.title}</h1>
                    <h2 class="text-[#64748B] text-[12px]">${element.description}</h2>
                </div>
                <div class="flex gap-3">
                    <div class="border border-[#FECACA] rounded-full px-2 py-1">
                        <p class="text-[0.6rem] text-[#EF4444]">
                            <i class="fa-solid fa-bug"></i> ${element.labels[0].toUpperCase()}</p>
                    </div>

                   ${element.labels[1] ? ` <div class="border border-[#FDE68A] rounded-full px-2 py-1">
                    <p class="text-[0.6rem] text-[#D97706]">
                    <i class="fa-solid fa-life-ring"></i> ${element.labels[1].toUpperCase()} </p> </div>` : ""}

                </div>
                <div class="opacity-30"><hr></div>
                <div class="">
                    <p><small class="text-[#64748B]">${element.assignee}</small></p>
                    <p><small class="text-[#64748B]">${date}</small></p>
                </div> 
                `;

        mainContainer.appendChild(div);
    });

}

loadAllData();