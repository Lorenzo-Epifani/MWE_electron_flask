const setButton = document.getElementById('titlebtn')
const titleInput = document.getElementById('title')

const ycoordInput = document.getElementById('ycoordInput')

const xcoordInput = document.getElementById('xcoordInput')

const windowInput = document.getElementById('windowInput')

const requestOrthosBtn = document.getElementById('requestOrthosBtn')

requestOrthosBtn.addEventListener('click', async () => {
    const requestMeta = {
        x:xcoordInput.value,
        y:ycoordInput.value,
        win:windowInput.value,
        root:"./orthos"
    }
    const request_example={
        "target":{
            "center":[18.104900,40.132300],
            "ofs":0.03
        },
        "res":10,
        "time_interval":[[2023,12,1], [2023,12,15]],
        "print_date":false,
        "day_skip":5,
        "bands":["rgb"]
    }
    const orthos = await window.backend.getOrthos(request_example)
    console.log(orthos)
})

setButton.addEventListener('click', () => {
    const title = titleInput.value
    window.electronAPI.setTitle(title)
  })

