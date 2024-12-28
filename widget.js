function showTab(tab){
    const contents = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.tab-btn');

    contents.forEach(content => content.classList.add('hidden'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tab).classList.remove('hidden');
    document.querySelector(`.tab-btn[onclick = "showTab('${tab}')"]`).classList.add('active');

}
