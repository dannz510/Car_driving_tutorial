let body = document.body

let sky = document.querySelector(".sky")

let cloudsVector = document.querySelector(".clouds-vector")
let cloudsVectorArray = [...cloudsVector.childNodes]

let sunMoonObjVector = document.querySelector(".sun-moon-obj-vector")
let sunObj = document.querySelector(".sun-obj")
let moonObj = document.querySelector(".moon-obj")
let moonPhase = document.querySelector(".moon-phase")

let ground = document.querySelector(".ground")

let roadVector = document.querySelector(".road-vector")
let road = document.querySelector(".road")
let roadLineWrapper = document.querySelector(".road-line-wrapper")
let roadLines = document.querySelectorAll(".road-line")

let mountainsVector = document.querySelector(".mountains-vector")
let mountainsVectorLeftSicde = document.querySelector(".mountains-range-left")
let mountainsVectorRightSide = document.querySelector(".mountains-range-right")
let carBox = document.querySelector(".carBox")
let speedometer = document.querySelector(".speedometer")
let speedometerCenter = document.querySelector(".speedometer-center")
let speedometerArrow = document.querySelector(".speedometer-arrow")

let revCounter = document.querySelector(".rev-counter")
let revCounterCenter = document.querySelector(".rev-counter-center")
let revCounterArrow = document.querySelector(".rev-counter-arrow")

let fuelGauge = document.querySelector(".fuel-gauge")
let fuelGaugeCenter = document.querySelector(".fuel-gauge-center")
let fuelGaugeArrow = document.querySelector(".fuel-gauge-arrow")


let vents = document.querySelector(".vents")

let sideMirrorsUpperSide = document.querySelectorAll(".side-mirror-upper-side")
let sideMirrorsUpperSideArray = [...sideMirrorsUpperSide]

let sideMirrorsDownSide = document.querySelectorAll(".side-mirror-down-side")
let sideMirrorsDownSideArray = [...sideMirrorsDownSide]

let carHood = document.getElementById("car-hood")
let carHoodDamaged = document.querySelector(".car-hood-damaged")
let carsVector = document.querySelector(".cars-vector")
let oppositeCar = document.getElementsByName("opposite-car")

let steeringWheel = document.querySelector(".steering-wheel")
let steeringWheels = document.querySelectorAll(".steering-wheel")


let details = document.querySelector(".details")

let distance = document.getElementById("distance")
let distanceText = document.getElementById("distance-text")
let distanceKM = document.getElementById("distance-km")
let distanceKMText = document.getElementById("distance-text-km")
let distanceMeters = document.getElementById("distance-meters")
let distanceMetersText = document.getElementById("distance-text-meters")
let distanceBtnIcon = document.getElementById("distance-btn-icon")
let distanceBtn = document.getElementById("distance-btn")

let speedH2 = document.getElementById("speed")
let speedText = document.getElementById("speed-text")
let speedKmH = document.getElementById("speed-km-h")
let speedKmHText = document.getElementById("speed-text-km-h")
let speedBtnIcon = document.getElementById("speed-btn-icon")
let speedBtn = document.getElementById("speed-btn")

let pointsDiv = document.getElementById("points-div")

let btnMenuSettings = document.getElementById("btn-menu-settings")
let menu = document.getElementById("menu")
let menuSettingAll = document.querySelectorAll(".menu-setting-all")
let menuSettingAllArray = [...menuSettingAll]

let restartMenu = document.getElementById("restart-menu")
let startBtn = document.getElementById("start")

let changeSteeringWheel = document.getElementById("change-steering-wheel")
let steeringWheelsParentContainer = document.getElementById("steering-wheels-parent-container")
let SteeringWheelsListContainer = document.getElementById("steering-wheels-list-container")
let SteeringWheelsListLive;


let changeCarColor = document.getElementById("change-car-color")
let colorParentContainer = document.getElementById("color-parent-container")
let carColorListContainer = document.getElementById("car-color-list-container")

let changePlace = document.getElementById("change-place")
let placeListParentContainer = document.getElementById("place-parent-container")
let placeListContainer = document.getElementById("place-list-container")
let placeListLive

let author = document.getElementById("author")
let authorInfoParentContainer = document.getElementById("author-info-parent-container")
let authorInfo = document.getElementById("author-info")

let oppositeCarPointsAppearVector = document.querySelector(".opposite-car-points-appear-vector")
let lineCarPointsAppearVector = document.querySelector(".line-car-points-appear-vector")

let gameStarted = false;












function soundEffects(url) {
  let a = new Audio(url)
  a.play()
}

menuSettingAllArray.map((menuItem) => {
  menuItem.removeEventListener(
    "mouseover", () => soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3")
  )
  menuItem.addEventListener(
    "mouseover", () => soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3")
  )
})









let SteeringWheelsList = [
  {
    status: "unlocked",
    img: "https://i.postimg.cc/HLmfpY2K/steering-wheel-115399042105p38svvilr-removebg-preview.png",
  },
  {
    status: "unlocked",
    img: "https://i.postimg.cc/dQ9Dv39M/a362385a988a692bf094ad12179368a5-removebg-preview.png",
  },
  {
    status: "unlocked",
    img: "https://i.postimg.cc/8PkrHKd5/momo-montecarlo-steering-wheel-black-leather-yellow-stitching-black-spokes-350mm-580x-removebg-previ.png",
  },
  {
    status: "unlocked",
    img: "https://i.postimg.cc/28dLLwGk/removal-ai-tmp-632eca44cbbd7.png"
  },
  {
    status: "locked",
    img: "https://i.postimg.cc/59RnkxWY/drifting-removebg-preview.png",// +
  },
  {
    status: "locked",
    img: "https://i.postimg.cc/vZL7Mykv/removal-ai-tmp-632eca3725d21.png",
  },
  {
    status: "locked",
    img: "https://i.postimg.cc/hvmHChvn/1649191010-4231-9011-01-1-removebg-preview.png",
  },
  {
    status: "locked",
    img: "https://i.postimg.cc/J7Xtkqxy/SCA-SPO3078484-hi-res-removebg-preview.png",
  },
  {
    status: "locked",
    img: "https://i.postimg.cc/LXrq77CK/removal-ai-tmp-632eca101cdeb.png",
  },
  {
    status: "locked",
    img: "https://i.postimg.cc/y8kHgd6j/removal-ai-tmp-632eca1f874f6.png",
  },
  {
    status: "locked",
    img: "https://i.postimg.cc/Jh62CcC5/removal-ai-tmp-632ec937daf08.png",
  },
  {
    status: "locked",
    img: "https://i.postimg.cc/3RF8tLc9/SCA-360648-hi-res-removebg-preview.png",
  },
  // https://postimg.cc/delete/J9PrSwsL/62e13c0c
  //   https://postimg.cc/delete/tK3L8WSV/7c9507fb
]










window.addEventListener("load", () => openElement(menu))

btnMenuSettings.removeEventListener("click", () => openElement(menu))
btnMenuSettings.addEventListener("click", () => openElement(menu))

btnMenuSettings.removeEventListener("click", () => btnMenuSettings.classList.toggle("btn-menu-settings-animated"))
btnMenuSettings.addEventListener("click", () => btnMenuSettings.classList.toggle("btn-menu-settings-animated"))

function openElement(element) {
  element.classList.toggle("displayed")
}

















changeSteeringWheel.removeEventListener("click", openSteeringWheelsList)
changeSteeringWheel.addEventListener("click", openSteeringWheelsList)

function openSteeringWheelsList() {
  steeringWheelsParentContainer.classList.toggle("displayed")
  SteeringWheelsListContainer.classList.toggle("displayed")
}






function saveToLocalStorageWheel(steeringWheelImg) {
  localStorage.setItem('mySteeringWheel', steeringWheelImg);
}






let SteeringWheelsListContainerArray = []

function loadSteeringWheelList() {
  SteeringWheelsList.map((SteeringWheelItem) => {

    if (SteeringWheelsListContainerArray.length < SteeringWheelsList.length) {
      SteeringWheelsListContainerArray.push(SteeringWheelItem)

      let SteeringWheelDiv = document.createElement("div")
      SteeringWheelDiv.classList.add("steering-wheel-div")

      if (SteeringWheelItem.status != "unlocked") {
        SteeringWheelDiv.classList.add("steering-wheel-div-locked")
        SteeringWheelDiv.innerHTML = `<i class="fa-solid fa-2xl fa-lock"></i>`
      }

      SteeringWheelDiv.style.background = `url(${SteeringWheelItem.img})`
      SteeringWheelDiv.style.backgroundPosition = "center"
      SteeringWheelDiv.style.backgroundSize = "contain"
      SteeringWheelDiv.style.backgroundRepeat = "no-repeat";
      SteeringWheelsListContainer.appendChild(SteeringWheelDiv)

      SteeringWheelDiv.removeEventListener("click", selectSteeringWheel)
      SteeringWheelDiv.addEventListener("click", selectSteeringWheel)




      function selectSteeringWheel() {
        if (!SteeringWheelDiv.classList.contains("steering-wheel-div-locked")) {
          let selectedSteeringWheel = this.style.background
          steeringWheel.style.background = selectedSteeringWheel

          // Save to LocalStorage
          saveToLocalStorageWheel(selectedSteeringWheel)

          soundEffects("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a")


          if (gameStarted == false) {
            null
          }
          else {
            openElement(menu)
          }

        }
        else if (SteeringWheelDiv.classList.contains("steering-wheel-div-locked")) {
          steeringWheelsParentContainer.classList.remove("displayed")
          SteeringWheelsListContainer.classList.remove("displayed")
        }

      }



    }

  })
}
loadSteeringWheelList()


const savedMySteeringWheel = localStorage.getItem('mySteeringWheel')
if (savedMySteeringWheel) {
  steeringWheel.style.background = savedMySteeringWheel
}















let carColorsList = [
  "rgb(255, 87, 51)",
  "rgb(255, 165, 51)",
  "rgb(255, 231, 51)",
  "rgb(223, 255, 51)",
  "rgb(97, 255, 51)",
  "rgb(51, 255, 101)",
  "rgb(51, 255, 188)",
  "rgb(51, 206, 255)",
  "rgb(51, 119, 255)",
  "rgb(51, 71, 255)",
  "rgb(109, 51, 255)",
  "rgb(154, 51, 255)",
  "rgb(109, 12, 205)",
  "rgb(192, 38, 255)",
  "rgb(243, 38, 255)",
  "rgb(255, 38, 130)",
  "rgb(219, 105, 24)",
  "rgb(255, 38, 64)",
  "rgb(255, 8, 44)",
  "rgb(193, 179, 176)",
  "rgb(159, 158, 157)",
  "rgb(192, 192, 192)",
  "rgb(28, 30, 43)",
  "rgb(17, 17, 18)",
  "rgb(145, 73, 0)",
  "rgb(135, 114, 92)",
  "rgb(199, 121, 86)",
  "rgb(142, 150, 26)",
  "rgb(21, 102, 35)",
  "rgb(33, 36, 117)",
  "rgb(17, 37, 84)",
  "rgb(8, 22, 56)",
  "rgb(43, 12, 54)",
  "rgb(77, 11, 46)",
  "rgb(77, 11, 25)",
  "rgb(94, 12, 14)",
  "rgb(245, 240, 240)",
]





let myCarColorsList = [
  "rgb(255, 87, 51)",
  "rgb(255, 165, 51)",
  "rgb(255, 231, 51)",
  "rgb(223, 255, 51)",
  "rgb(97, 255, 51)",
  "rgb(51, 255, 101)",
  "rgb(51, 255, 188)",
  "rgb(51, 206, 255)",
  "rgb(51, 119, 255)",
  "rgb(51, 71, 255)",
  "rgb(109, 51, 255)",
  "rgb(154, 51, 255)",
  "rgb(109, 12, 205)",
  "rgb(192, 38, 255)",
  "rgb(243, 38, 255)",
  "rgb(255, 38, 130)",
  "rgb(219, 105, 24)",
  "rgb(255, 38, 64)",
  "rgb(255, 8, 44)",
  "rgb(193, 179, 176)",
  "rgb(159, 158, 157)",
  "rgb(192, 192, 192)",
  "rgb(28, 30, 43)",
  "rgb(17, 17, 18)",
  "rgb(145, 73, 0)",
  "rgb(135, 114, 92)",
  "rgb(199, 121, 86)",
  "rgb(142, 150, 26)",
  "rgb(21, 102, 35)",
  "rgb(33, 36, 117)",
  "rgb(17, 37, 84)",
  "rgb(8, 22, 56)",
  "rgb(43, 12, 54)",
  "rgb(77, 11, 46)",
  "rgb(77, 11, 25)",
  "rgb(94, 12, 14)",
  "rgb(245, 240, 240)",
  "linear-gradient(45deg, rgb(3, 69, 252), rgb(22, 42, 97))",
  "linear-gradient(45deg, rgb(93, 112, 163), rgb(22, 42, 97))",
  "linear-gradient(0deg, rgb(174, 179, 191), rgb(8, 31, 94))",
  "linear-gradient(0deg, rgb(174, 179, 191) 0% 20%, rgb(8, 31, 94) 50% 100%)",
  "linear-gradient(45deg, rgb(174, 179, 191) 0% 5%, rgb(8, 31, 94) 80% 100%)",
  "linear-gradient(45deg, rgb(174, 179, 191) 0% 10%, rgb(8, 31, 94) 30% 100%)",
  "linear-gradient(45deg, rgb(237, 230, 230) 0% 20%, rgb(207, 31, 31) 20% 50%, rgb(237, 230, 230) 50% 70%, rgb(207, 31, 31) 70% 100%)",
  "linear-gradient(90deg, rgb(237, 230, 230) 0% 20%, rgb(207, 31, 31) 20% 50%, rgb(237, 230, 230) 50% 70%, rgb(207, 31, 31) 70% 100%)",
  "linear-gradient(90deg, rgb(207, 31, 31) 0% 35%, rgb(237, 230, 230) 35% 65%, rgb(207, 31, 31) 65% 100%)",
  "linear-gradient(90deg, rgb(207, 31, 31) 0% 38%, rgb(237, 230, 230) 38% 62%, rgb(207, 31, 31) 62% 100%)",
  "linear-gradient(90deg, rgb(24, 24, 184) 0% 38%, rgb(237, 230, 230) 38% 62%, rgb(24, 24, 184) 62% 100%)",
  "linear-gradient(90deg, rgb(252, 190, 88) 0% 38%, rgb(237, 230, 230) 38% 62%, rgb(252, 190, 88) 62% 100%)",
  "linear-gradient(90deg, rgb(224, 194, 43) 0% 38%, rgb(237, 230, 230) 38% 62%, rgb(224, 194, 43) 62% 100%)",
  "linear-gradient(90deg, rgb(38, 125, 30) 0% 38%, rgb(237, 230, 230) 38% 62%, rgb(38, 125, 30) 62% 100%)",
]


function saveToLocalStorageCarHoodColor(carHoodColor) {
  localStorage.setItem('myCarHoodColor', carHoodColor);
}



changeCarColor.removeEventListener("click", openCarColorList)
changeCarColor.addEventListener("click", openCarColorList)
let carColorListContainerArray = []


function openCarColorList() {
  colorParentContainer.classList.toggle("displayed")
  carColorListContainer.classList.toggle("displayed")
  myCarColorsList.map((carColor) => {

    if (carColorListContainerArray.length < myCarColorsList.length) {
      carColorListContainerArray.push(carColor)

      let carColorDiv = document.createElement("div")
      carColorDiv.classList.add("car-color-div")
      carColorDiv.style.background = `${carColor}`
      carColorListContainer.appendChild(carColorDiv)

      carColorDiv.removeEventListener("click", selectCarColor)
      carColorDiv.addEventListener("click", selectCarColor)

      function selectCarColor() {
        let selectedCarColor = this.style.background
        carHood.style.background = selectedCarColor
        carHoodDamaged.style.background = selectedCarColor

        saveToLocalStorageCarHoodColor(selectedCarColor)
        soundEffects("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a")
        if (gameStarted == false) {
          null
        }
        else {
          openElement(menu)
        }
      }
    }

  })
}


const savedMyCarHoodColor = localStorage.getItem('myCarHoodColor')
if (savedMyCarHoodColor) {
  carHood.style.background = savedMyCarHoodColor
  carHoodDamaged.style.background = savedMyCarHoodColor
}
















let placeList = [
  {
    name: "field",
    sunObj: "linear-gradient(-45deg, rgb(235, 64, 52), rgb(230, 194, 14))",
    // box-shadow:0px 0px 200px 100px rgb(230, 194, 14, 0.5);
    sunObjBoxShadow: "0px 0px 200px 100px rgb(230, 194, 14, 0.5)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "linear-gradient(rgb(54, 84, 110, 1) 0% 5%, rgb(32, 57, 79))",
    mountainsRight: "linear-gradient(rgb(50, 73, 97), rgb(27, 52, 77))",
    groundObj: "linear-gradient(rgb(27, 99, 25), rgb(5, 23, 6))",
    roadObj: "linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "unlocked",
  },
  {
    name: "desert",
    sunObj: "rgb(201, 90, 30)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(212, 98, 40)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "rgb(204, 165, 37)",
    mountainsRight: "rgb(191, 111, 25)",
    groundObj: "linear-gradient(rgb(168, 113, 50), rgb(125, 74, 16))",
    roadObj: "linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "unlocked",
  },
  {
    name: "ground 1",
    sunObj: "rgb(110, 43, 8)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(128, 58, 22)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "rgb(87, 70, 62)",
    mountainsRight: "rgb(54, 40, 34)",
    groundObj: "linear-gradient(rgb(69, 61, 54), rgb(99, 78, 60))",
    roadObj: "linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "unlocked",
  },
  {
    name: "ground 2",
    sunObj: "none",
    sunObjBoxShadow: "none",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "rgb(41, 22, 14)",
    mountainsRight: "rgb(41, 22, 14)",
    groundObj: "rgb(33, 16, 2)",
    roadObj: "linear-gradient(-45deg, rgb(20, 20, 20), rgb(80, 78, 82))",
    // roadObj: "linear-gradient(-45deg, rgb(20, 20, 20), rgb(57, 56, 59))",
    // roadObj: "linear-gradient(-45deg, red, rgb(80, 78, 82))",
    // roadObj: "linear-gradient(-45deg, rgb(33, 30, 36), rgb(27, 26, 28))",
    // roadObj: "linear-gradient(-45deg, rgb(155, 137, 173), rgb(27, 26, 28))",
    // roadObj: "linear-gradient(-45deg, rgb(33, 30, 36), rgb(52, 46, 59))",
    status: "unlocked",
  },
  {
    name: "ice Ground 1 with mist",
    sunObj: "rgb(116, 173, 160)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(167, 209, 199)",
    cloudsVector_ZIndex: "2",
    mountainsLeft: "",
    mountainsRight: "",
    groundObj: "rgb(27, 77, 128)",
    roadObj: "linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "unlocked",
  },
  {
    name: "ice Ground 2",
    sunObj: "rgb(91, 139, 176)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(116, 173, 160)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "rgb(144, 160, 171)",
    mountainsRight: "rgb(168, 232, 240)",
    // mountainsRight: "rgb(125, 209, 219)",
    // mountainsRight: "rgb(73, 178, 191)",
    // mountainsRight: "rgb(41, 102, 110)",
    groundObj: "linear-gradient(rgb(27, 77, 128), rgb(80, 126, 173))",
    roadObj: "background: linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "unlocked",
  },
  {
    name: "arctic - ice Ground 1",
    sunObj: "rgb(230, 236, 240)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(77, 153, 148)",
    cloudsVector_ZIndex: "2",
    mountainsLeft: "rgb(193, 205, 214)",
    mountainsRight: "",
    groundObj: "linear-gradient(rgb(80, 126, 173), rgb(21, 57, 94))",
    roadObj: "rgb(148, 181, 181)",
    status: "unlocked",
  },
  {
    name: "arctic - ice Ground 2",
    sunObj: "rgb(230, 236, 240)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(77, 153, 148)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "linear-gradient(rgb(193, 205, 214), rgb(182, 210, 214))",
    // mountainsLeft: "rgb(193, 205, 214)",
    // mountainsRight: "rgb(193, 105, 114)",
    // mountainsRight: "rgb(193, 205, 114)",
    // mountainsRight: "rgb(193, 195, 194)",
    mountainsRight: "rgb(183, 195, 194)",
    groundObj: "linear-gradient(rgb(193, 205, 214), rgb(21, 57, 94))",
    roadObj: "rgb(187, 199, 201)",
    status: "unlocked",
  },
  {
    name: "Winter - 1",
    sunObj: "rgb(230, 236, 240)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(77, 153, 148)",
    cloudsVector_ZIndex: "2",
    mountainsLeft: "linear-gradient(rgb(193, 205, 214), rgb(42, 72, 140))",
    // mountainsLeft: "rgb(193, 205, 214)",
    // mountainsRight: "rgb(193, 105, 114)",
    // mountainsRight: "rgb(193, 205, 114)",
    // mountainsRight: "rgb(193, 195, 194)",
    mountainsRight: "linear-gradient(20deg, rgb(86, 116, 184), rgb(42, 72, 140))",
    groundObj: "linear-gradient(rgb(184, 201, 214), rgb(86, 116, 184))",
    roadObj: "rgb(187, 199, 201)",
    status: "locked",
  },
  {
    name: "Winter - 2 with mist",
    sunObj: "rgb(230, 236, 240)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(77, 153, 148)",
    cloudsVector_ZIndex: "2",
    mountainsLeft: "linear-gradient(rgb(193, 205, 214), rgb(42, 72, 140))",
    // mountainsLeft: "rgb(193, 205, 214)",
    // mountainsRight: "rgb(193, 105, 114)",
    // mountainsRight: "rgb(193, 205, 114)",
    // mountainsRight: "rgb(193, 195, 194)",
    mountainsRight: "linear-gradient(20deg, rgb(86, 116, 184), rgb(42, 72, 140))",
    groundObj: "linear-gradient(rgb(100, 131, 156), rgb(86, 116, 184))",
    roadObj: "rgb(187, 199, 201)",
    status: "locked",
  },
  {
    name: "dutch Ground 1",
    sunObj: "rgb(242, 235, 128)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(242, 235, 128)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "none",
    mountainsRight: "none",
    groundObj: "linear-gradient(to left, rgb(108, 20, 201), rgb(105, 50, 128))",
    roadObj: "linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "locked",
  },
  {
    name: "dutch Ground 2",
    // sunObj: "rgb(230, 221, 85)",
    sunObj: "rgb(212, 194, 108)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(230, 221, 85)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "rgb(76, 50, 191)",
    mountainsRight: "rgb(47, 19, 92)",
    groundObj: "rgb(86, 33, 107)",
    roadObj: "linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "locked",
  },
  {
    name: "subtropic 1",
    sunObj: "rgb(237, 219, 119)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(237, 228, 178)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "rgb(36, 107, 45)",
    mountainsRight: "linear-gradient(to top, rgb(30, 110, 40), rgb(48, 120, 57))",
    groundObj: "rgb(43, 92, 49)",
    roadObj: "rgb(56, 71, 31)",
    // groundObj: "rgb(18, 176, 36)"
    status: "locked",
  },
  {
    name: "subtropic 2",
    // sunObj: "rgb(237, 219, 119)","
    sunObj: "linear-gradient(rgb(235, 64, 52), rgb(230, 194, 14))",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(237, 228, 178)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "rgb(33, 133, 43)",
    mountainsRight: "rgb(15, 77, 21)",
    groundObj: "rgb(7, 48, 11)",
    roadObj: "linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "locked",
  },
  {
    name: "taiga 1",
    sunObj: "rgb(237, 219, 119)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(237, 228, 178)",
    cloudsVector_ZIndex: "1",
    mountainsLeft: "rgb(21, 59, 25)",
    mountainsRight: "rgb(15, 77, 21)",
    groundObj: "rgb(7, 48, 11)",
    roadObj: "rgb(38, 41, 34)",
    // roadObj: "rgb(51, 56, 44)",
    // roadObj: "rgb(56, 64, 44)",
    status: "locked",
  },
  {
    name: "field with fog",
    sunObj: "linear-gradient(-45deg, rgb(235, 64, 52), rgb(230, 194, 14))",
    // box-shadow:0px 0px 200px 100px rgb(230, 194, 14, 0.5);
    sunObjBoxShadow: "0px 0px 200px 100px rgb(230, 194, 14, 0.5)",
    cloudsVector_ZIndex: "2",
    mountainsLeft: "linear-gradient(rgb(54, 84, 110, 1) 0% 5%, rgb(32, 57, 79))",
    mountainsRight: "linear-gradient(rgb(50, 73, 97), rgb(27, 52, 77))",
    groundObj: "linear-gradient(rgb(27, 99, 25), rgb(5, 23, 6))",
    roadObj: "linear-gradient(-45deg, rgb(31, 38, 54) 0 85%, rgb(47, 55, 74))",
    status: "locked",
  },
  {
    name: "taiga with fog",
    sunObj: "rgb(237, 219, 119)",
    sunObjBoxShadow: "0px 0px 200px 100px rgb(237, 228, 178)",
    cloudsVector_ZIndex: "2",
    mountainsLeft: "rgb(21, 59, 25)",
    mountainsRight: "rgb(15, 77, 21)",
    groundObj: "rgb(7, 48, 11)",
    roadObj: "rgb(38, 41, 34)",
    // roadObj: "rgb(51, 56, 44)",
    // roadObj: "rgb(56, 64, 44)",
    status: "locked",
  },
]









changePlace.removeEventListener("click", openPlacesList)
changePlace.addEventListener("click", openPlacesList)

function openPlacesList() {
  placeListParentContainer.classList.toggle("displayed")
  placeListContainer.classList.toggle("displayed")
}







function saveToLocalStoragePlace(placeObj) {
  localStorage.setItem('myPlaceObj', placeObj);
}







let placeListContainerArray = []


function loadPlaceList() {

  placeList.map((place) => {
    let placeName = place["name"]
    let placeSunObj = place["sunObj"]
    let placeSunObjBoxShadow = place["sunObjBoxShadow"]
    let placeCloudsVector_ZIndex = place.cloudsVector_ZIndex
    let placeMountainsLeft = place.mountainsLeft
    let placeMountainsRight = place.mountainsRight
    let placeGroundObj = place.groundObj
    let placeRoadObj = place.roadObj

    let placeObjVariables = {
      placeSunObj,
      placeSunObjBoxShadow,
      placeCloudsVector_ZIndex,
      placeMountainsLeft,
      placeMountainsRight,
      placeGroundObj,
      placeRoadObj,
    }

    if (placeListContainerArray.length < placeList.length) {
      placeListContainerArray.push(place)

      let placeNameP = document.createElement("p")
      placeNameP.classList.add("place-name-p")
      placeNameP.innerText = `${placeName}`

      let placeDiv = document.createElement("div")
      placeDiv.classList.add("place-div")
      placeDiv.setAttribute("name", `${placeName}`)
      placeDiv.setAttribute("placeSunObjBoxShadow", `${placeSunObjBoxShadow}`)
      placeDiv.setAttribute("placeCloudsVector_ZIndex", `${placeCloudsVector_ZIndex}`)
      placeDiv.setAttribute("placeMountainsLeft", `${placeMountainsLeft}`)
      placeDiv.setAttribute("placeMountainsRight", `${placeMountainsRight}`)
      placeDiv.setAttribute("placeRoadObj", `${placeRoadObj}`)
      placeDiv.style.background = `${placeGroundObj}`


      if (place.status != "unlocked") {
        placeDiv.classList.add("place-div-locked")
        placeDiv.innerHTML = `<i class="fa-solid fa-2xl fa-lock"></i>`
      }

      placeDiv.appendChild(placeNameP)
      placeListContainer.appendChild(placeDiv)

      placeDiv.removeEventListener("click", selectPlace)
      placeDiv.addEventListener("click", selectPlace)




      function selectPlace() {
        if (!placeDiv.classList.contains("place-div-locked")) {
          sunObj.style.background = placeSunObj
          sunObj.style.boxShadow = placeSunObjBoxShadow
          cloudsVector.style.zIndex = placeCloudsVector_ZIndex
          mountainsVectorLeftSicde.style.background = placeMountainsLeft
          mountainsVectorRightSide.style.background = placeMountainsRight
          ground.style.background = placeGroundObj
          road.style.background = placeRoadObj
          sideMirrorsDownSideArray.map((sideMirror) => {
            return sideMirror.style.background = placeGroundObj
          })

          saveToLocalStoragePlace(JSON.stringify(placeObjVariables))

          soundEffects("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a")
          
          if (gameStarted == false) {
            null
          }
          else {
            openElement(menu)
          }
        }
        else if (placeDiv.classList.contains("steering-wheel-div-locked")) {
          placeListParentContainer.classList.remove("displayed")
          placeListContainer.classList.remove("displayed")
        }

      }



    }

  })
}
loadPlaceList()






const savedMyPlaceObjColors = localStorage.getItem('myPlaceObj')
if (savedMyPlaceObjColors) {
  let ParsedObj = JSON.parse(savedMyPlaceObjColors)

    sunObj.style.background = ParsedObj.placeSunObj
    sunObj.style.boxShadow = ParsedObj.placeSunObjBoxShadow
    cloudsVector.style.zIndex = ParsedObj.placeCloudsVector_ZIndex
    mountainsVectorLeftSicde.style.background = ParsedObj.placeMountainsLeft
    mountainsVectorRightSide.style.background = ParsedObj.placeMountainsRight
    ground.style.background = ParsedObj.placeGroundObj
    road.style.background = ParsedObj.placeRoadObj
    sideMirrorsDownSideArray.map((sideMirror) => {
      return sideMirror.style.background = ParsedObj.placeGroundObj
    })
    cloudsVectorArray.map((eachCloud) => {
      eachCloud.style.zIndex = placeCloudsObj_ZIndex
    })
}



















author.removeEventListener("click", openAuthorInfo)
author.addEventListener("click", openAuthorInfo)

function openAuthorInfo() {
  authorInfoParentContainer.classList.toggle("displayed")
  authorInfo.classList.toggle("displayed")
  // console.log(authorInfo, "authorInfo")
}










let speedometerLinePosition = -120

function speedometerFunc() {

  for (let i = 0; i < 41; i++) {
    speedometerLinePosition = speedometerLinePosition + 180 / 30

    let speedometerLine = document.createElement("span")
    speedometerLine.classList.add("speedometerLine")
    speedometerLine.style.transform = `rotateZ(${speedometerLinePosition}deg)`
    speedometerCenter.appendChild(speedometerLine)

    if (Number.isInteger(i / 5)) {
      speedometerLine.style.borderTop = "10px solid rgb(237, 169, 74)"
      speedometerLine.innerText = `${i / 5 * 20}`
    }
  }
}
speedometerFunc()









let revCounterLinePosition = -125

function revCounterFunc() {

  for (let i = 0; i < 41; i++) {
    revCounterLinePosition = revCounterLinePosition + 180 / 30

    let revCounterLine = document.createElement("span")
    revCounterLine.classList.add("revCounterLine")
    revCounterLine.style.transform = `rotateZ(${revCounterLinePosition}deg)`
    revCounterCenter.appendChild(revCounterLine)

    if (Number.isInteger(i / 5)) {
      revCounterLine.style.borderTop = "10px solid white"
      revCounterLine.innerText = `${i / 5}`
    }

    if (i / 5 >= 6) {
      revCounterLine.style.borderColor = "red"
    }
  }
}
revCounterFunc()









let fuelGaugeLinePosition = 0

function fuelGaugeFunc() {

  for (let i = 0; i < 5; i++) {
    fuelGaugeLinePosition = fuelGaugeLinePosition + 180 / 6

    let fuelGaugeLine = document.createElement("span")
    fuelGaugeLine.classList.add("fuelGaugeLine")
    fuelGaugeLine.style.transform = `rotateZ(${fuelGaugeLinePosition}deg)`
    fuelGaugeCenter.appendChild(fuelGaugeLine)

    if (Number.isInteger(i / 2)) {
      fuelGaugeLine.style.borderWidth = "7px"
      fuelGaugeLine.style.width = "2px"

      if (i / 2 == 0) {
        let fuelGaugeLinePFull = document.createElement("p")
        fuelGaugeLinePFull.innerText = "F";
        fuelGaugeLinePFull.style.transform = `rotateZ(${-fuelGaugeLinePosition}deg)`
        fuelGaugeLine.appendChild(fuelGaugeLinePFull)
      }
      else if (i / 2 == 2) {
        let fuelGaugeLinePFull = document.createElement("p")
        fuelGaugeLinePFull.innerText = "E";
        fuelGaugeLinePFull.style.transform = `rotateZ(${-fuelGaugeLinePosition}deg)`
        fuelGaugeLine.appendChild(fuelGaugeLinePFull)
      }

    }

    if (i > 1) {
      fuelGaugeLine.style.borderColor = "red"
    }
  }
}
fuelGaugeFunc()














function createVentsLines() {

  function createHorizontalVentsLines() {
    let topPosition = -8
    for (let i = 0; i < 7; i++) {
      topPosition = topPosition + 8
      let ventsLineHorizontal = document.createElement("div")
      ventsLineHorizontal.classList.add("vents-line-horizontal")
      ventsLineHorizontal.style.top = `${topPosition}px`
      vents.appendChild(ventsLineHorizontal)

      if (i == 3) {
        let ventsLineHorizontal_MiddlePartLeft = document.createElement("div")
        let ventsLineHorizontal_MiddlePartRight = document.createElement("div")
        ventsLineHorizontal_MiddlePartLeft.classList.add("vents-line-horizontal-middle-part-left")
        ventsLineHorizontal_MiddlePartRight.classList.add("vents-line-horizontal-middle-part-right")
        ventsLineHorizontal.appendChild(ventsLineHorizontal_MiddlePartLeft)
        ventsLineHorizontal.appendChild(ventsLineHorizontal_MiddlePartRight)
      }
    }
  }
  createHorizontalVentsLines()




  function createVerticalVentsLines() {
    let leftPosition = 0
    for (let i = 0; i < 22; i++) {
      leftPosition = leftPosition + 10
      let ventsLineVertical = document.createElement("div")
      ventsLineVertical.classList.add("vents-line-vertical")
      ventsLineVertical.style.left = `${leftPosition}px`
      vents.appendChild(ventsLineVertical)
    }
  }
  createVerticalVentsLines()


}
createVentsLines()













function checkCloudNodes() {

  let intervalId = setInterval(() => {
      let cloudsVectorArrayLive = [...cloudsVector.childNodes]
      // console.log(cloudsVectorArrayLive, "cloudsVectorArrayLive")

      cloudsVectorArrayLive.map((cloud) => {
        if (cloud.classList == "clouds" || cloud.classList == "first-clouds") {
          if (parseInt(cloud.style.left) >= 1400) {
            cloud.remove()
          }
        }
      
      })

      clearInterval(intervalId)
      checkCloudNodes()
    }, 50)

}
checkCloudNodes()






















start.addEventListener("click", () => {
  start.style.display = "none";
  restartMenu.style.display = "flex";
  btnMenuSettings.classList.toggle("btn-menu-settings-animated")
  openElement(menu)
  gameStarted = true

  let turnDegree = 0;
  let turnLeft = false;
  let turnRight = false;
  let roadVectorLeft = 450
  let roadVectorRotateZ = 45

  let cloudsVectorLeft = 0
  let sunMoonObjVectorLeft = 0
  let groundBlur = 0.5

  let speedInKms = 0
  let speedInMiles;
  let showSpeedIn_MH = false;

  let manualIncreaseSpeed = false;
  let carBrake = false

  let roadLineWrapperRotateZ = -45
  let gameOver = false;

  let oppositeCarRotateX = 90;
  let oppositeCarRotateY = 0;
  let oppositeCarRotateZ = 0;
  let oppositeCarWarn = false;
  let oppositeCarWarnRotateZ

  let lineCarRotateX = 90
  let lineCarRotateY = 0
  let lineCarRotateZ = 180

  let carNewHeight = 5
  let carNewWidth = 5









  document.removeEventListener("keydown", turnSteeringWheel)
  document.addEventListener("keydown", turnSteeringWheel)

  document.removeEventListener("keyup", returnSteeringWheelNormPosition)
  document.addEventListener("keyup", returnSteeringWheelNormPosition)

  document.removeEventListener("keydown", increaseSpeedManually)
  document.addEventListener("keydown", increaseSpeedManually)

  document.removeEventListener("keydown", DecreaseSpeedManuallyForBrake)
  document.addEventListener("keydown", DecreaseSpeedManuallyForBrake)







  function speedFunc() {
    let trueOrFalse = Math.floor(Math.random() * 2)
    let randomIncrDecrSpeedAuto = Math.floor(Math.random() * 3)
    speedInMiles = speedInKms * 0.62

    if (!gameOver) {
      if (speedInKms < 71 && !carBrake) {
        let intervalId1 = setInterval(() => {
          speedInKms = speedInKms + 1

          if (!showSpeedIn_MH) {
            speedKmH.innerText = parseInt(speedInKms)
          }
          else if (showSpeedIn_MH) {
            speedKmH.innerText = parseInt(speedInMiles)
          }

          clearInterval(intervalId1)
          speedFunc()
        }, 100)

      }
      else if (speedInKms == 71 && !carBrake) {
        if (trueOrFalse <= 1) {
          let intervalId2 = setInterval(() => {
            speedInKms = speedInKms + randomIncrDecrSpeedAuto
            if (!showSpeedIn_MH) {
              speedKmH.innerText = parseInt(speedInKms)
            }
            else if (showSpeedIn_MH) {
              speedKmH.innerText = parseInt(speedInMiles)
            }

            clearInterval(intervalId2)
            speedFunc()
          }, 50)
        }


        if (trueOrFalse > 1) {
          let intervalId3 = setInterval(() => {
            speedInKms = speedInKms - randomIncrDecrSpeedAuto
            if (!showSpeedIn_MH) {
              speedKmH.innerText = parseInt(speedInKms)
            }
            else if (showSpeedIn_MH) {
              speedKmH.innerText = parseInt(speedInMiles)
            }

            clearInterval(intervalId3)
            speedFunc()
          }, 50)
        }
      }
      else if (speedInKms >= 72 && !manualIncreaseSpeed && !carBrake) {
        let intervalId4 = setInterval(() => {
          speedInKms = speedInKms - randomIncrDecrSpeedAuto
          groundBlur = groundBlur - 0.002
          ground.style.filter = `blur(${groundBlur}px)`
          if (!showSpeedIn_MH) {
            speedKmH.innerText = parseInt(speedInKms)
          }
          else if (showSpeedIn_MH) {
            speedKmH.innerText = parseInt(speedInMiles)
          }

          clearInterval(intervalId4)
          speedFunc()
        }, 100)
      }
    }
    else if (gameOver) {
      if (speedInKms > 0) {
        let intervalId5 = setInterval(() => {
          speedInKms = speedInKms - 1
          groundBlur = groundBlur + 0.002
          ground.style.filter = `blur(${groundBlur}px)`
          if (!showSpeedIn_MH) {
            speedKmH.innerText = parseInt(speedInKms)
          }
          else if (showSpeedIn_MH) {
            speedKmH.innerText = parseInt(speedInMiles)
          }

          clearInterval(intervalId5)
          speedFunc()
        }, 5)
      }

    }


  }
  speedFunc()











  function increaseSpeedManually(e) {
    if (e.keyCode == 38) {

      if (speedInKms < 185) {
        let intervalId1 = setInterval(() => {

          speedInKms = speedInKms + 1
          groundBlur = groundBlur + 0.002
          ground.style.filter = `blur(${groundBlur}px)`
          clearInterval(intervalId1)

        }, 100)
      }

    }
  }





  function DecreaseSpeedManuallyForBrake(e) {
    if (e.keyCode == 40 && speedInKms >= 40) {
      let decreaseNum = 1

      if (speedInKms > 10 && speedInKms - decreaseNum > 0) {
        let intervalId1 = setInterval(() => {
          decreaseNum = decreaseNum * 2
          speedInKms = speedInKms - decreaseNum
          groundBlur = groundBlur - 0.002
          ground.style.filter = `blur(${groundBlur}px)`
          clearInterval(intervalId1)
        }, 100)
      }
      else if (speedInKms >= 2) {
        let intervalId1 = setInterval(() => {
          speedInKms = speedInKms - 1
          clearInterval(intervalId1)
        }, 100)
      }

    }
  }









  function dashboardLines() {
    let speedometerArrowStartPosition = -115
    let revCounterArrowStartPosition = -115

    let intervalId = setInterval(() => {
      speedometerArrow.style.transform = `rotateZ(${speedometerArrowStartPosition + speedInKms * 1.5}deg)`
      revCounterArrow.style.transform = `rotateZ(${speedometerArrowStartPosition + speedInKms * 1.25}deg)`
      // fuelGaugeArrow
      clearInterval(intervalId)
      dashboardLines()
    }, 50)

  }
  dashboardLines()










  function warningHighSpeed() {
    let intervalId1 = setInterval(() => {
      if (speedInKms >= 100) {
        speedKmH.style.color = "red"
      }
      else if (speedInKms < 100) {
        speedKmH.style.color = "rgb(0, 45, 179, 0.7)"
      }
      clearInterval(intervalId1)
      warningHighSpeed()
    }, 50)
  }
  warningHighSpeed()










  function warningCriticalSpeed() {
    let intervalId2 = setInterval(() => {
      if (speedInKms >= 140) {
        speed.classList.add("speed-warning")
      }
      else if (speedInKms < 140) {
        speed.classList.remove("speed-warning")
      }
      clearInterval(intervalId2)
      warningCriticalSpeed()
    }, 50)
  }
  warningCriticalSpeed()













  function addCarPointsToPointsDiv(carpoints) {

    let timeoutId1 = setTimeout(() => {
      pointsNum = pointsNum + carpoints
      pointsOppositeCar = 0
      pointsLineCar = 0
      pointsDiv.innerText = pointsNum.toFixed(0)
      pointsDiv.style.color = "rebeccapurple"
      clearTimeout(timeoutId1)
    }, 2500)


    let timeoutId2 = setTimeout(() => {
      pointsDiv.style.color = "rgb(227, 227, 236)"
      clearTimeout(timeoutId2)
    }, 3500)
  }














  let pointsOppositeCar = 0
  let pointsLineCar = 0

  function pointsOnOppositeCar() {
    pointsOppositeCar = 150 + (speedInKms * 2)
    oppositeCarPointsAppearVector.innerText = "+ " + pointsOppositeCar

    oppositeCarPointsAppearVector.classList.remove("points-on-car-disappear-animate")
    oppositeCarPointsAppearVector.classList.add("points-on-car-appear-animate")
    

    let timeoutId2 = setTimeout(() => {
      oppositeCarPointsAppearVector.classList.add("points-on-car-disappear-animate")
      clearTimeout(timeoutId2)
    }, 2000)

    addCarPointsToPointsDiv(pointsOppositeCar)
  }






  function pointsOnLineCar() {
    pointsLineCar = 150 + speedInKms
    lineCarPointsAppearVector.innerText = "+ " + pointsLineCar

    lineCarPointsAppearVector.classList.remove("points-on-car-disappear-animate")
    lineCarPointsAppearVector.classList.add("points-on-car-appear-animate")


    let timeoutId2 = setTimeout(() => {
      lineCarPointsAppearVector.classList.add("points-on-car-disappear-animate")
      clearTimeout(timeoutId2)
    }, 2000)

    addCarPointsToPointsDiv(pointsLineCar)
  }














  function checkCarNodes() {
    if (!gameOver) {
      let intervalId = setInterval(() => {
        let roadWrapper = [...roadLineWrapper.childNodes]

        roadWrapper.map((Car) => {
          if (Car.classList == "opposite-cars") {
            if (parseInt(Car.style.top) >= 190 && roadVectorLeft > 370) {
              gameOver = true;
              carHoodDamaged.style.display = "flex"
              steeringWheel.style.transform = "rotateY(10deg) rotateZ(50deg)"
              smoke()
              openElement(restart)
            }

            if (parseInt(Car.style.top) > 450) {
              Car.remove()
              pointsOnOppositeCar()
            }
          }

          else if (Car.classList == "line-cars") {
            if (parseInt(Car.style.top) >= document.body.clientHeight - document.body.clientHeight + 80
              && parseInt(Car.style.top) < 275 && roadVectorLeft < 440) {
              gameOver = true;
              carHoodDamaged.style.display = "flex"
              steeringWheel.style.transform = "rotateY(10deg) rotateZ(50deg)"
              smoke()
              openElement(restart)
            }

            if (parseInt(Car.style.top) > 350 || parseInt(Car.style.top) <= 0) {
              Car.remove()
              pointsOnLineCar()
            }
          }

        })


        clearInterval(intervalId)
        checkCarNodes()
      }, 50)
    }

  }
  checkCarNodes()



















  function createRoadLineAndPosition() {


    function createRoadLine() {

      if (!gameOver) {
        let intervalId1 = setInterval(() => {
          let roadLineFirstTopPosition = 0;
          let roadLineNewTopPosition = 0;
          let roadLineHeight = 1
          let roadLineNewHeight = 1
          let roadLineWidth = 1
          let roadLineNewWidth = 1

          let roadLine = document.createElement("div")
          roadLine.classList.add("road-line")
          roadLineWrapper.appendChild(roadLine)

          roadLine.style.top = roadLineFirstTopPosition + "px";
          roadLine.style.height = roadLineHeight + "px"
          roadLine.style.width = roadLineWidth + "px"



          function roadLinePosition() {
            let intervalId2 = setInterval(() => {
              if (parseInt(roadLine.style.top) > 350) {
                roadLine.remove()
                roadLineFirstTopPosition = 0
                roadLineNewTopPosition = 0
                roadLineNewHeight = 1
                roadLineNewWidth = 1
              }

              if (!gameOver) {
                if (roadLineNewTopPosition > 50) {
                  roadLineNewHeight = roadLineNewHeight + 2
                  roadLineNewWidth = roadLineNewWidth + 1
                  roadLine.style.top = roadLineNewTopPosition + "px";
                  roadLine.style.height = roadLineNewHeight + "px";
                  roadLine.style.width = roadLineNewWidth + "px";
                }
                roadLineNewTopPosition = roadLineNewTopPosition + roadLineNewHeight + speedInKms / 35
                roadLineNewHeight = roadLineNewHeight + 0.8
                roadLineNewWidth = roadLineNewWidth + 0.4
                roadLine.style.top = roadLineNewTopPosition + "px";
                roadLine.style.height = roadLineNewHeight + "px";
                roadLine.style.width = roadLineNewWidth + "px";
                clearInterval(intervalId2)
                roadLinePosition()
              }
            }, 50)
          }
          roadLinePosition()





          clearInterval(intervalId1)
          createRoadLine()
        }, 300 - speedInKms)

      }
    }
    createRoadLine()




  }
  createRoadLineAndPosition()














  class Cars {
    constructor(props) {

      this.carFirstTopPosition = props.carFirstTopPosition
      this.carNewTopPosition = props.carNewTopPosition
      this.carHeight = props.carHeight
      this.carNewHeight = props.carNewHeight
      this.carWidth = props.carWidth
      this.carNewWidth = props.carNewWidth
      this.carLength = props.carLength
      this.carNewDegree = props.carNewDegree
      this.carSpeed = props.carSpeed
      this.carLeftOrRight = props.carLeftOrRight
      this.carNewLeftOrRight = props.carNewLeftOrRight
      this.checkWarnPosition = props.checkWarnPosition
      this.hasOrNotWarnPosition = props.hasOrNotWarnPosition
      this.carClass = props.carClass
      this.carAttribute = props.carAttribute
      this.carAttributeName = props.carAttributeName
    }



    createCars = () => {
      let carRandomWarnRotate = Math.floor(10 + Math.random() * 20)
      let carRandomBorderRadius = Math.floor(10 + Math.random() * 70)
      let oppositeCarRandomTime = Math.floor(7000 + Math.random() * 17000)
      let lineCarRandomTime = Math.floor(3000 + Math.random() * 11000)


      let intervalId1 = setInterval(() => {
        let carFirstTopPosition = this.carFirstTopPosition
        let carNewTopPosition = this.carNewTopPosition
        let carHeight = this.carHeight
        let carNewHeight = this.carNewHeight
        let carWidth = this.carWidth
        let carNewWidth = this.carNewWidth
        let carLength = this.carLength
        let carLeftOrRight = this.carLeftOrRight
        let carNewLeftOrRight = this.carNewLeftOrRight
        let carNewDegree = this.carNewDegree
        let carSpeed = this.carSpeed

        let hasOrNotWarnPosition = this.hasOrNotWarnPosition

        let carClass = this.carClass
        let carAttribute = this.carAttribute
        let carAttributeName = this.carAttributeName


        let car = document.createElement("div")
        car.classList.add(carClass)
        car.setAttribute(carAttribute, carAttributeName);
        roadLineWrapper.appendChild(car)

        let carFront = document.createElement("div")
        carFront.classList.add("car-front")

        let carLeftSide = document.createElement("div")
        carLeftSide.classList.add("car-left-side")

        let carRightSide = document.createElement("div")
        carRightSide.classList.add("car-right-side")

        let carBack = document.createElement("div")
        carBack.classList.add("car-back")

        car.appendChild(carFront)
        car.appendChild(carLeftSide)
        car.appendChild(carRightSide)
        car.appendChild(carBack)




        let carFrontLight1 = document.createElement("div")
        carFrontLight1.classList.add("car-front-light-1")
        carFrontLight1.classList.add("car-front-lights")
        carFrontLight1.style.borderRadius = `2% 2% ${carRandomBorderRadius}% 2%`

        let carFrontLight2 = document.createElement("div")
        carFrontLight2.classList.add("car-front-light-2")
        carFrontLight2.classList.add("car-front-lights")
        carFrontLight2.style.borderRadius = `2% 2% 2% ${carRandomBorderRadius}%`

        let carBumperGrill = document.createElement("div")
        carBumperGrill.classList.add("car-bumper-grill")

        let oppositeCarHood = document.createElement("div")
        oppositeCarHood.classList.add("opposite-car-hood")

        carFront.appendChild(carFrontLight1)
        carFront.appendChild(carFrontLight2)
        carFront.appendChild(carBumperGrill)
        carFront.appendChild(oppositeCarHood)




        let windowGlass = document.createElement("div")
        windowGlass.classList.add("window-glass")

        oppositeCarHood.appendChild(windowGlass)



        let carRoof = document.createElement("div")
        carRoof.classList.add("car-roof")

        let carRightSideDoor1Window1 = document.createElement("div")
        carRightSideDoor1Window1.classList.add("car-right-side-door-1-window-1")

        windowGlass.appendChild(carRightSideDoor1Window1)
        windowGlass.appendChild(carRoof)



        let rearWindow = document.createElement("div")
        rearWindow.classList.add("rear-window")

        let carRightSideDoor1Window2 = document.createElement("div")
        carRightSideDoor1Window2.classList.add("car-right-side-door-1-window-2")

        let carRightSideDoor2Window1 = document.createElement("div")
        carRightSideDoor2Window1.classList.add("car-right-side-door-2-window-1")

        let carRightSideDoor1Line = document.createElement("div")
        carRightSideDoor1Line.classList.add("car-right-side-door-1-line")

        carRoof.appendChild(rearWindow)
        carRoof.appendChild(carRightSideDoor1Window2)
        carRoof.appendChild(carRightSideDoor2Window1)
        carRightSideDoor1Window2.appendChild(carRightSideDoor1Line)



        let carRightSideDoor2Window2 = document.createElement("div")
        carRightSideDoor2Window2.classList.add("car-right-side-door-2-window-2")

        rearWindow.appendChild(carRightSideDoor2Window2)




        let carLeftSideDoor1 = document.createElement("div")
        carLeftSideDoor1.classList.add("car-left-side-door-1")

        let carLeftSideDoor2 = document.createElement("div")
        carLeftSideDoor2.classList.add("car-left-side-door-2")

        carLeftSide.appendChild(carLeftSideDoor1)
        carLeftSide.appendChild(carLeftSideDoor2)




        let oppositeCarBottomFrontSpace = document.createElement("div")
        oppositeCarBottomFrontSpace.classList.add("opposite-car-bottom-front-space")

        let carRightSideDoor1 = document.createElement("div")
        carRightSideDoor1.classList.add("car-right-side-door-1")

        let carRightSideDoor2 = document.createElement("div")
        carRightSideDoor2.classList.add("car-right-side-door-2")

        let carRightSideWheel1_Axle = document.createElement("div")
        carRightSideWheel1_Axle.classList.add("car-right-side-wheel-1-axle")

        let carRightSideWheel2_Axle = document.createElement("div")
        carRightSideWheel2_Axle.classList.add("car-right-side-wheel-2-axle")

        let carRightSideWheel1 = document.createElement("div")
        carRightSideWheel1.classList.add("car-right-side-wheel-1")

        let carRightSideWheel2 = document.createElement("div")
        carRightSideWheel2.classList.add("car-right-side-wheel-2")

        let carRightSideWheelDisc1 = document.createElement("div")
        carRightSideWheelDisc1.classList.add("car-right-side-wheel-disc-1")

        let carRightSideWheelDisc2 = document.createElement("div")
        carRightSideWheelDisc2.classList.add("car-right-side-wheel-disc-2")

        carRightSide.appendChild(oppositeCarBottomFrontSpace)
        carRightSide.appendChild(carRightSideDoor1)
        carRightSide.appendChild(carRightSideDoor2)
        carRightSide.appendChild(carRightSideWheel1_Axle)
        carRightSide.appendChild(carRightSideWheel2_Axle)
        carRightSideWheel1_Axle.appendChild(carRightSideWheel1)
        carRightSideWheel2_Axle.appendChild(carRightSideWheel2)
        carRightSideWheel1.appendChild(carRightSideWheelDisc1)
        carRightSideWheel2.appendChild(carRightSideWheelDisc2)




        let oppositeCarBottomHoodSpace = document.createElement("div")
        oppositeCarBottomHoodSpace.classList.add("opposite-car-bottom-hood-space")

        oppositeCarBottomFrontSpace.appendChild(oppositeCarBottomHoodSpace)


        let oppositeCarBottomFrontRight = document.createElement("div")
        oppositeCarBottomFrontRight.classList.add("opposite-car-bottom-front-right")

        oppositeCarBottomHoodSpace.appendChild(oppositeCarBottomFrontRight)




        let carRightSideDoor1WindowBlock = document.createElement("div")
        carRightSideDoor1WindowBlock.classList.add("car-right-side-door-1-window-block")

        let carRightSideDoor2WindowBlock = document.createElement("div")
        carRightSideDoor2WindowBlock.classList.add("car-right-side-door-2-window-block")

        carRightSideDoor1.appendChild(carRightSideDoor1WindowBlock)
        carRightSideDoor2.appendChild(carRightSideDoor2WindowBlock)


        let carBackLight1 = document.createElement("div")
        carBackLight1.classList.add("car-back-light-1")
        carBackLight1.classList.add("car-back-lights")
        carBackLight1.style.borderRadius = `2% 2% ${carRandomBorderRadius}% 2%`

        let carBackLight2 = document.createElement("div")
        carBackLight2.classList.add("car-back-light-2")
        carBackLight2.classList.add("car-back-lights")
        carBackLight2.style.borderRadius = `2% 2% 2% ${carRandomBorderRadius}%`

        let carTrunk = document.createElement("div")
        carTrunk.classList.add("car-trunk")

        carBack.appendChild(carBackLight1)
        carBack.appendChild(carBackLight2)
        carBack.appendChild(carTrunk)




        let randomCarsColor = Math.floor(Math.random() * carColorsList.length)

        const randmCarsColorFunc = (...elements) => {
          elements.map((element) => {
            element.style.background = carColorsList[randomCarsColor]
          })
        }
        randmCarsColorFunc(car, carFront, carLeftSide, carRightSide, oppositeCarBottomFrontRight, carBack, oppositeCarHood, carLeftSideDoor1, carLeftSideDoor2, carRightSideDoor1, carRightSideDoor2, carRightSideDoor1WindowBlock, carRightSideDoor2WindowBlock, carTrunk, carRoof)


        

        const createContoursFunc = (...elements) => {
          elements.map((element) => {
            element.style.border = "1px solid rgb(28, 30, 43)"
          })
        }
        createContoursFunc(carFront, carLeftSide, carBack, oppositeCarHood, carLeftSideDoor1, carLeftSideDoor2, carTrunk, rearWindow, carRoof)






        const checkWarnPosition = () => {
          oppositeCarWarnRotateZ = oppositeCarRotateZ

          if (roadVectorLeft > 370) {
            oppositeCarWarn = true
            oppositeCarWarnRotateZ = oppositeCarRotateZ + carRandomWarnRotate
          }
          else if (roadVectorLeft < 371 && oppositeCarWarn == true) {
            oppositeCarWarnRotateZ = oppositeCarRotateZ - 10

            let timoutId = setTimeout(() => {
              oppositeCarWarn = false
              oppositeCarWarnRotateZ = oppositeCarRotateZ
              clearTimeout(timoutId)
            }, 500)
          }

        }







        const lineCarsSpeedController = () => {
          if (speedInKms <= 60) {
            return 250 - speedInKms / 5
          }
          else if (speedInKms <= 80) {
            return 150 - speedInKms / 5
          }
          else if (speedInKms > 80) {
            return 90 - speedInKms / 5
          }
        }







        const roadOppositeCarsPosition = () => {
          let intervalId2 = setInterval(() => {

            if (!gameOver && carClass == "opposite-cars") {
              if (carNewTopPosition > 350 && carNewTopPosition < 370) {
                carNewTopPosition = carNewTopPosition
                carNewHeight = 5
                carNewWidth = 5
              }
              if (carNewTopPosition > 150 && carNewTopPosition < 350) {
                carNewTopPosition = carNewTopPosition + 10
                carNewTopPosition = carNewTopPosition + 30
                carNewHeight = carNewHeight + 30
                carNewLeftOrRight = carNewLeftOrRight - 30
                carNewWidth = carNewWidth + 15
              }
              else if (carNewTopPosition > 120) {
                carNewTopPosition = carNewTopPosition + 5
                carNewTopPosition = carNewTopPosition + 20
                car.style.top = carNewTopPosition + "px";
                carNewLeftOrRight = carNewLeftOrRight - 27
                carNewHeight = carNewHeight + 50
                carNewWidth = carNewWidth + 25
              }
              else if (carNewTopPosition > 30) {
                carNewTopPosition = carNewTopPosition + carHeight
                carNewTopPosition = carNewTopPosition + 7
                car.style.top = carNewTopPosition + "px";
                carNewLeftOrRight = carNewLeftOrRight - 22
                carNewHeight = carNewHeight + 40
                carNewWidth = carNewWidth + 20
              }
              carNewTopPosition = carNewTopPosition + carHeight
              carNewHeight = carNewHeight + 1.5
              carNewLeftOrRight = carNewLeftOrRight - 1.1
              carNewWidth = carNewWidth + 0.75
              carLength = car.style.height
              car.style.top = carNewTopPosition + "px";
              car.style.height = carNewHeight + "px";
              car.style.width = carNewWidth + "px"
              carLeftOrRight == "left" ? car.style.left = carNewLeftOrRight + "px" :
                car.style.right = carNewLeftOrRight + "px"


              if (oppositeCarWarn && carNewTopPosition > 50) {
                car.style.transform = `rotateX(${oppositeCarRotateX}deg) rotateY(${oppositeCarRotateY}deg) rotateZ(${oppositeCarWarnRotateZ}deg)`
              }
              else if (!oppositeCarWarn && oppositeCarWarnRotateZ == oppositeCarRotateY) {
                car.style.transform = `rotateX(${oppositeCarRotateX}deg) rotateY(${oppositeCarRotateY}deg) rotateZ(${oppositeCarWarnRotateZ}deg)`
              }
              else {
                car.style.transform = `rotateX(${oppositeCarRotateX}deg) rotateY(${oppositeCarRotateY}deg) rotateZ(${oppositeCarRotateZ}deg)`
              }


            }

            hasOrNotWarnPosition == "yes" ? checkWarnPosition() : null
            clearInterval(intervalId2)
            roadOppositeCarsPosition()


          }, speedInKms <= 70 ? 50 : 60 - speedInKms / 3)
        }
        roadOppositeCarsPosition()









        const lineCarsPosition = () => {
          let intervalId2 = setInterval(() => {
            // console.log(parseInt(car.style.top), "parseInt(Car.style.top)")
            if (!gameOver && carClass == "line-cars") {
              if (carNewTopPosition > 350 && carNewTopPosition < 370) {
                carNewTopPosition = carNewTopPosition
                carNewHeight = 5
                carNewWidth = 5
              }
              if (carNewTopPosition > 150 && carNewTopPosition < 350) {
                carNewTopPosition = carNewTopPosition + 30
                carNewHeight = carNewHeight + 30
                carNewLeftOrRight = carNewLeftOrRight - 20
                carNewWidth = carNewWidth + 15
              }
              else if (carNewTopPosition > 120) {
                carNewTopPosition = carNewTopPosition + 20
                car.style.top = carNewTopPosition + "px";
                carNewLeftOrRight = carNewLeftOrRight - 5
                carNewHeight = carNewHeight + 50
                carNewWidth = carNewWidth + 25
              }
              else if (carNewTopPosition > 30) {
                carNewTopPosition = carNewTopPosition + 10
                car.style.top = carNewTopPosition + "px";
                carNewLeftOrRight = carNewLeftOrRight - 5
                carNewHeight = carNewHeight + 40
                carNewWidth = carNewWidth + 20
              }
              carNewTopPosition = carNewTopPosition + carHeight
              carNewHeight = carNewHeight + 1.5
              carNewLeftOrRight = carNewLeftOrRight - carNewWidth / 20
              carNewWidth = carNewWidth + 0.75
              carLength = car.style.height
              car.style.top = carNewTopPosition + "px";
              car.style.height = carNewHeight + "px";
              car.style.width = carNewWidth + "px"
              carLeftOrRight == "left" ? car.style.right = carNewLeftOrRight + "px" :
                car.style.right = carNewLeftOrRight + "px"


              car.style.transform = `rotateX(${lineCarRotateX}deg) rotateY(${lineCarRotateY}deg) rotateZ(${lineCarRotateZ}deg)`
            }
            clearInterval(intervalId2)
            lineCarsPosition()



          }, lineCarsSpeedController())
        }
        lineCarsPosition()




        clearInterval(intervalId1)
        this.createCars()
      }, this.carClass == "opposite-cars" ? oppositeCarRandomTime : lineCarRandomTime)





    }  // -  End Of the Scope of "createCars()" Function



  }  // -  End Of the Scope of "Cars" Class









  let leftCars = "left"
  let hasWarnPosition = "yes"
  let oppositeCarClass = "opposite-cars"
  let oppositeCarAttribute = "name"
  let oppositeCarAttributeName = "opposite-car"


  let OppositeCar = new Cars(
    {
      carFirstTopPosition: 0,
      carNewTopPosition: 0,
      carHeight: 1,
      carNewHeight: carNewHeight,
      carWidth: 1,
      carNewWidth: carNewWidth,
      carLength: 1,
      carNewDegree: 0,
      carSpeed: 0,
      carNewLeftOrRight: 1,
      carRotateX: oppositeCarRotateX,
      carRotateY: oppositeCarRotateY,
      carRotateZ: oppositeCarRotateZ,
      carWarn: oppositeCarWarn,
      carWarnRotateZ: oppositeCarWarnRotateZ,
      carLeftOrRight: leftCars,
      hasOrNotWarnPosition: hasWarnPosition,
      carClass: oppositeCarClass,
      carAttribute: oppositeCarAttribute,
      carAttributeName: oppositeCarAttributeName,
    })










  let rightCars = "right"
  let hasNoWarnPosition = "no"
  let lineCarClass = "line-cars"
  let lineCarAttribute = "name"
  let lineCarAttributeName = "line-car"


  let LineCar = new Cars(
    {
      carFirstTopPosition: 0,
      carNewTopPosition: 0,
      carHeight: 1,
      carNewHeight: carNewHeight,
      carWidth: 1,
      carNewWidth: carNewWidth,
      carLength: 1,
      carNewDegree: 0,
      carSpeed: 0,
      carNewLeftOrRight: 2,
      carRotateX: lineCarRotateX,
      carRotateY: lineCarRotateY,
      carRotateZ: lineCarRotateZ,
      hasWarnPosition: hasWarnPosition,
      carLeftOrRight: rightCars,
      hasOrNotWarnPosition: hasNoWarnPosition,
      carClass: lineCarClass,
      carAttribute: lineCarAttribute,
      carAttributeName: lineCarAttributeName,
    })




  let timeoutId = setTimeout(() => {
    OppositeCar.createCars()
    LineCar.createCars()
    clearTimeout(timeoutId)
  }, 400)













  function turnSteeringWheel(e) {


    if (!gameOver) {

      function turnSteeringWheelLeft() {
        if (e.keyCode == 37 && roadVectorRotateZ > 41) {
          roadVectorLeft = roadVectorLeft + 10
          roadVector.style.left = `${roadVectorLeft}px`;
          mountainsVector.style.left = `${roadVectorLeft}px`;
          oppositeCarPointsAppearVector.style.left = `${roadVectorLeft - 200}px`;
          lineCarPointsAppearVector.style.left = `${roadVectorLeft + 200}px`;

          cloudsVectorLeft = cloudsVectorLeft + 10
          cloudsVector.style.left = `${cloudsVectorLeft}px`;

          sunMoonObjVectorLeft = sunMoonObjVectorLeft + 2
          sunMoonObjVector.style.left = `${sunMoonObjVectorLeft}px`;

          roadVectorRotateZ = roadVectorRotateZ - 1
          roadLineWrapperRotateZ = roadLineWrapperRotateZ - 1
          roadVector.style.transform = `rotateX(60deg) rotateZ(${roadVectorRotateZ}deg`
          roadLineWrapper.style.transform = `rotateX(0deg) rotateZ(${roadLineWrapperRotateZ}deg)`

          if (roadVectorRotateZ >= 41) {
            oppositeCarRotateY = oppositeCarRotateY + 2
            lineCarRotateY = lineCarRotateY + 2
          }
        }

        if (e.keyCode == 37 && turnDegree > -55) {
          let intervalId = setInterval(() => {
            turnDegree = turnDegree - 4
            steeringWheel.style.transform = `rotateZ(${turnDegree}deg)`
            clearInterval(intervalId)
          }, 5)
        }
        // console.log(roadVectorLeft, "roadVectorLeft")
      }
      turnSteeringWheelLeft()



      function turnSteeringWheelRight() {
        if (e.keyCode == 39 && roadVectorRotateZ < 56) {
          roadVectorLeft = roadVectorLeft - 10
          roadVector.style.left = `${roadVectorLeft}px`;
          mountainsVector.style.left = `${roadVectorLeft}px`;
          oppositeCarPointsAppearVector.style.left = `${roadVectorLeft - 200}px`;
          lineCarPointsAppearVector.style.left = `${roadVectorLeft + 200}px`;

          cloudsVectorLeft = cloudsVectorLeft - 10
          cloudsVector.style.left = `${cloudsVectorLeft}px`;

          sunMoonObjVectorLeft = sunMoonObjVectorLeft - 2
          sunMoonObjVector.style.left = `${sunMoonObjVectorLeft}px`;

          roadVectorRotateZ = roadVectorRotateZ + 1
          roadLineWrapperRotateZ = roadLineWrapperRotateZ + 1
          roadVector.style.transform = `rotateX(60deg) rotateZ(${roadVectorRotateZ}deg`
          roadLineWrapper.style.transform = `rotateX(0deg) rotateZ(${roadLineWrapperRotateZ}deg)`

          if (roadVectorRotateZ <= 60) {
            oppositeCarRotateY = oppositeCarRotateY - 2
            lineCarRotateY = lineCarRotateY - 2
          }
        }

        if (e.keyCode == 39 && turnDegree < 45) {
          let intervalId = setInterval(() => {
            turnDegree = turnDegree + 4
            steeringWheel.style.transform = `rotateZ(${turnDegree}deg)`
            clearInterval(intervalId)
          }, 5)
        }
        // console.log(roadVectorLeft, "roadVectorLeft - right")
      }
      turnSteeringWheelRight()

    }




  }













  function returnSteeringWheelNormPosition() {

    if (turnDegree < 0) {

      let setIntervalId = setInterval(() => {
        if (turnDegree != 0) {
          turnDegree = turnDegree + 2;
          steeringWheel.style.transform = `rotateZ(${turnDegree}deg)`
          clearInterval(setIntervalId)
          returnSteeringWheelNormPosition()
        }
      }, 20)
    }
    else if (turnDegree > 0) {
      let setIntervalId = setInterval(() => {

        if (turnDegree != 0) {
          turnDegree = turnDegree - 2;
          steeringWheel.style.transform = `rotateZ(${turnDegree}deg)`
          clearInterval(setIntervalId)
          returnSteeringWheelNormPosition()
        }
      }, 20)
    }
  }











  function smoke() {
    if (gameOver == true) {

      let smokeBg = document.createElement("div")
      smokeBg.classList.add("smoke-bg")
      carHood.appendChild(smokeBg)

      for (let i = 0; i < 100; i++) {
        let randomSmokePositionX = 0
        let randomSmokeInitialPositionY;
        let smokeRandomWidth = 0
        let smokeRandomHeight = 0
        let opacity = 1

        let smokeSpan = document.createElement("span")
        smokeSpan.classList.add("smoke-span")
        smokeBg.appendChild(smokeSpan)

        randomSmokeInitialPositionY = 300 - Math.floor(Math.random() * 400)
        randomSmokePositionX = -50 + Math.floor(Math.random() * 350)
        smokeRandomWidth = 75 + Math.floor(Math.random() * 85)
        smokeRandomHeight = 75 + Math.floor(Math.random() * 95)

        smokeSpan.style.bottom = randomSmokeInitialPositionY + "px"
        smokeSpan.style.left = randomSmokePositionX + "px"
        smokeSpan.style.width = smokeRandomWidth + "px"
        smokeSpan.style.height = smokeRandomHeight + "px"


        function defineSmokePositionY() {
          let intervalId = setInterval(() => {
            if (parseInt(smokeSpan.style.bottom) >= 400) {
              randomSmokeInitialPositionY = 300 - Math.floor(Math.random() * 400)
              smokeSpan.style.bottom = randomSmokeInitialPositionY + "px"

              opacity = 1
              smokeSpan.style.opacity = opacity
            }

            randomSmokeInitialPositionY = randomSmokeInitialPositionY + 1
            smokeSpan.style.bottom = randomSmokeInitialPositionY + "px"

            opacity = opacity - 0.005
            smokeSpan.style.opacity = opacity

            clearInterval(intervalId)
            defineSmokePositionY()
          }, 5)
        }
        defineSmokePositionY()

      }
    }
  }
  smoke()
















  function increaseDistance() {
    let distanceInMeters = 0;
    let distanceInKMs;
    let showKMsAndMeters = false;


    distanceBtnIcon.removeEventListener("click", showKMsAndMetersFunc)
    distanceBtnIcon.addEventListener("click", showKMsAndMetersFunc)
    distanceBtn.removeEventListener("click", showKMsAndMetersFunc)
    distanceBtn.addEventListener("click", showKMsAndMetersFunc)


    function showKMsAndMetersFunc() {
      if (showKMsAndMeters == false) {
        showKMsAndMeters = true
        distanceKM.classList.remove("hidden")
        distanceKMText.classList.remove("hidden")
        distanceMeters.classList.remove("hidden")
        distanceMetersText.classList.remove("hidden")

        distanceKM.innerText = parseInt(distanceInKMs)
        distanceKMText.innerText = " KM And "
        distanceMeters.innerText = distanceInMeters.toString().slice(-3)
        distanceMetersText.innerText = "Meters"
        distanceBtn.innerText = "KM"

        distanceBtnIcon.removeEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
        distanceBtn.removeEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
        distanceBtnIcon.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
        distanceBtn.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      }
      else if (showKMsAndMeters == true) {
        showKMsAndMeters = false
        distanceKMText.innerText = " KM"

        if (distanceInMeters < 1000) {
          distanceMeters.innerText = distanceInMeters
          distanceKMText.innerText = " KM"
          distanceKM.classList.add("hidden")
          distanceKMText.classList.add("hidden")
        }
        else {
          distanceKM.innerText = distanceInKMs.toFixed(1)
          distanceKM.classList.remove("hidden")
          distanceKMText.classList.remove("hidden")
          distanceMeters.classList.add("hidden")
          distanceMetersText.classList.add("hidden")
        }

        distanceBtn.innerText = "KM And Meters"

        distanceBtnIcon.removeEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
        distanceBtn.removeEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
        distanceBtnIcon.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
        distanceBtn.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      }
    }








    let unlockedItems;



    function saveToLocalStorage_New_Wheel(NewSteeringWheel) {
      localStorage.setItem('myNewSteeringWheel', NewSteeringWheel);
    }



    function distanceSetInterval() {
      if (!gameOver) {
        let intervalId = setInterval(() => {
          distanceInMeters = distanceInMeters + 10
          distanceInKMs = distanceInMeters * 0.001

          if (showKMsAndMeters) {
            distanceKM.classList.remove("hidden")
            distanceKMText.classList.remove("hidden")
            distanceMeters.classList.remove("hidden")
            distanceMetersText.classList.remove("hidden")

            distanceKM.innerText = parseInt(distanceInKMs)
            distanceMeters.innerText = distanceInMeters.toString().slice(-3)
            // console.log(distanceInKMs.toFixed(0), distanceInMeters )
          }
          else {
            if (distanceInMeters < 1000) {
              distanceMeters.innerText = distanceInMeters
              distanceKM.classList.add("hidden")
              distanceKMText.classList.add("hidden")
            }
            else {
              distanceKM.innerText = distanceInKMs.toFixed(1)
              distanceKM.classList.remove("hidden")
              distanceKMText.classList.remove("hidden")
              distanceMeters.classList.add("hidden")
              distanceMetersText.classList.add("hidden")
            }
          }




          function unLockSteeringWheels() {

            if (distanceInKMs % 5 == 0) {

              SteeringWheelsListLive = [...SteeringWheelsListContainer.childNodes]
              // console.log(SteeringWheelsListLive, "SteeringWheelsListLive")
              let onlyLockedSteeringWheels = []
              let unlockedSteeringWheels = []

              SteeringWheelsListLive.filter((item) => {
                if (item.classList) {
                  if (item.classList.contains("steering-wheel-div-locked")) {
                    onlyLockedSteeringWheels.push(item)

                    onlyLockedSteeringWheels.map((lockedItem, indx) => {
                      if (indx == 0 && lockedItem.innerHTML != "") {

                        lockedItem.classList.remove("steering-wheel-div-locked")
                        lockedItem.innerHTML = ""
                        lockedItem.classList.add("steering-wheel-div-unlocked-new")
                        unlockedSteeringWheels.push(lockedItem)

                        unLockedMessage("Steering Wheel", 
                                        "unLocked-message-steering-wheel", 
                                        "complete-sign-steering-wheel",
                                        "check-sign-steering-wheel")
                        
                        removeClass(lockedItem, "steering-wheel-div-unlocked-new")
                        saveToLocalStorage_New_Wheel(unlockedSteeringWheels)

                      }
                    })

                  }
                }
              })

            }

          }
          unLockSteeringWheels()





          clearInterval(intervalId)
          distanceSetInterval()
        }, 220 - speedInKms)
      }
    }
    distanceSetInterval()



  }
  increaseDistance()









  let pointsNum = 0
  let initialPoint = 4000
  let n = 1


  function increasePoints() {

    if (!gameOver) {
      let intervalId = setInterval(() => {
        let pointsforSpeed = speedInKms / 10
        pointsNum = pointsNum + 2 + pointsforSpeed
        pointsDiv.innerText = pointsNum.toFixed(0)
        
        function unLockPlaces() {
          if (pointsNum / (initialPoint * n) >= 1) {
            n = n + 1

            placeListLive = [...placeListContainer.childNodes]
            let onlyLockedPlaces = []
            let unlockedPlaces = []

            placeListLive.filter((item) => {
              if (item.classList) {
                if (item.classList.contains("place-div-locked")) {
                  onlyLockedPlaces.push(item)

                  onlyLockedPlaces.map((lockedItem, indx) => {
                    if (indx == 0 && lockedItem.innerHTML != "") {

                      let placeNameP = document.createElement("p")
                      placeNameP.classList.add("place-name-p")
                      placeNameP.innerText = lockedItem.getAttribute("name")

                      lockedItem.classList.remove("place-div-locked")
                      lockedItem.innerHTML = ""
                      lockedItem.classList.add("place-div-unlocked-new")
                      lockedItem.appendChild(placeNameP)

                      unlockedPlaces.push(lockedItem)

                      unLockedMessage("Place", 
                                      "unLocked-message-place",
                                      "complete-sign-place",
                                      "check-sign-place")
                      
                      removeClass(lockedItem, "place-div-unlocked-new")
                      // saveToLocalStorage_New_Wheel(unlockedPlaces)

                    }
                  })

                }
              }
            })

          }

        }
        unLockPlaces()


        clearInterval(intervalId)
        increasePoints()
      }, 100)
    }

  }
  increasePoints()















  const savedMy_New_SteeringWheel = localStorage.getItem('myNewSteeringWheel')
  if (savedMy_New_SteeringWheel) {
    SteeringWheelsListLive = savedMy_New_SteeringWheel
    // console.log(savedMy_New_SteeringWheel, "savedMy_New_SteeringWheel")
  }

















  function unLockedMessage(thing, unlockClass, completeClass, checkSignClass) {
    let unlockedDiv = document.createElement("div")
    unlockedDiv.classList.add(unlockClass)

    let unlockedH3 = document.createElement("h3")
    unlockedH3.innerText = `You Have Unlocked New ${thing} !`
    unlockedDiv.classList.add("unLocked-h3")

    let completeSign = document.createElement("span")
    completeSign.classList.add(completeClass)
    completeSign.classList.add(checkSignClass)

    unlockedDiv.appendChild(unlockedH3)
    unlockedDiv.appendChild(completeSign)
    body.appendChild(unlockedDiv)

    let timeoutId = setTimeout(() => {
      unlockedDiv.classList.add("hidden")
      clearTimeout(timeoutId)
    }, 5000)

  }












  function removeClass(item, itemClass) {
    let timeoutId1 = setTimeout(() => {
      item.classList.remove(itemClass)
      clearTimeout(timeoutId1)
    }, 50000)
  }














  speedBtnIcon.removeEventListener("click", changeText_KmH_MH)
  speedBtnIcon.addEventListener("click", changeText_KmH_MH)
  speedBtn.removeEventListener("click", changeText_KmH_MH)
  speedBtn.addEventListener("click", changeText_KmH_MH)

  function changeText_KmH_MH() {
    if (showSpeedIn_MH == false || showSpeedIn_MH == undefined) {
      showSpeedIn_MH = true

      speedKmHText.innerText = " M/H"
      speedBtn.innerText = "KM/H"

      speedBtnIcon.removeEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      speedBtn.removeEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      speedBtnIcon.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      speedBtn.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
    }
    else if (showSpeedIn_MH == true) {
      showSpeedIn_MH = false

      speedKmHText.innerText = " KM/H"
      speedBtn.innerText = "M/H"

      speedBtnIcon.removeEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      speedBtn.removeEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      speedBtnIcon.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      speedBtn.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
    }

  }




}) // "Start" Btn Scopes End 











let dayTimeInterval = 400
let nightTimeInterval = 2000


let morningTime = true
let afternoonTime = false
let eveningTime = false
let nightTime = false


function morningToEvening_changeColor(morning, afternoon, evening, night, ObjToChangeColor) {

  let morningRed = morning[0]
  let morningGreen = morning[1]
  let morningBlue = morning[2]
  let copyOfMorning = morning

  let afternoonRed = afternoon[0]
  let afternoonGreen = afternoon[1]
  let afternoonBlue = afternoon[2]
  let copyOfAfternoon = afternoon

  let eveningRed = evening[0]
  let eveningGreen = evening[1]
  let eveningBlue = evening[2]
  let copyOfEvening = evening

  let nightRed = night[0]
  let nightGreen = night[1]
  let nightBlue = night[2]
  let copyOfNight = night




  function increaseDecrease() {
    copyOfMorning = [morningRed, morningGreen, morningBlue]
    copyOfAfternoon = [afternoonRed, afternoonGreen, afternoonBlue]
    copyOfEvening = [eveningRed, eveningGreen, eveningBlue]
    copyOfNight = [nightRed, nightGreen, nightBlue]


    if (JSON.stringify(copyOfMorning) !== JSON.stringify(afternoon)) {
      morningTime = true
      afternoonTime = false
      eveningTime = false
      nightTime = false

      let intervalId = setInterval(() => {

        if (morningRed < afternoon[0]) {
          morningRed++
        }
        if (morningGreen < afternoon[1]) {
          morningGreen++
        }
        if (morningBlue < afternoon[2]) {
          morningBlue++
        }
        if (morningRed > afternoon[0]) {
          morningRed--
        }
        if (morningGreen > afternoon[1]) {
          morningGreen--
        }
        if (morningBlue > afternoon[2]) {
          morningBlue--
        }

        ObjToChangeColor.style.background = `rgb(${copyOfMorning})`
        afternoonRed = afternoon[0]
        afternoonGreen = afternoon[1]
        afternoonBlue = afternoon[2]

        clearInterval(intervalId)
        increaseDecrease()
      }, dayTimeInterval)


    }
    else if (JSON.stringify(copyOfAfternoon) !== JSON.stringify(evening)) {
      morningTime = false
      afternoonTime = true
      eveningTime = false
      nightTime = false

      let intervalId = setInterval(() => {

        if (afternoonRed < evening[0]) {
          afternoonRed++
        }
        if (afternoonGreen < evening[1]) {
          afternoonGreen++
        }
        if (afternoonBlue < evening[2]) {
          afternoonBlue++
        }
        if (afternoonRed > evening[0]) {
          afternoonRed--
        }
        if (afternoonGreen > evening[1]) {
          afternoonGreen--
        }
        if (afternoonBlue > evening[2]) {
          afternoonBlue--
        }

        ObjToChangeColor.style.background = `rgb(${copyOfAfternoon})`
        eveningRed = evening[0]
        eveningGreen = evening[1]
        eveningBlue = evening[2]

        clearInterval(intervalId)
        increaseDecrease()
      }, dayTimeInterval)
    }
    else if (JSON.stringify(copyOfEvening) !== JSON.stringify(night)) {
      morningTime = false
      afternoonTime = false
      eveningTime = true
      nightTime = false

      let intervalId = setInterval(() => {

        if (eveningRed < night[0]) {
          eveningRed++
        }
        if (eveningGreen < night[1]) {
          eveningGreen++
        }
        if (eveningBlue < night[2]) {
          eveningBlue++
        }
        if (eveningRed > night[0]) {
          eveningRed--
        }
        if (eveningGreen > night[1]) {
          eveningGreen--
        }
        if (eveningBlue > night[2]) {
          eveningBlue--
        }

        ObjToChangeColor.style.background = `rgb(${copyOfEvening})`

        nightRed = night[0]
        nightGreen = night[1]
        nightBlue = night[2]

        clearInterval(intervalId)
        increaseDecrease()
      }, nightTimeInterval)
    }
    else if (JSON.stringify(copyOfNight) !== JSON.stringify(morning)) {
      morningTime = false
      afternoonTime = false
      eveningTime = false
      nightTime = true

      let intervalId = setInterval(() => {

        if (nightRed < morning[0]) {
          nightRed++
        }
        if (nightGreen < morning[1]) {
          nightGreen++
        }
        if (nightBlue < morning[2]) {
          nightBlue++
        }
        if (nightRed > morning[0]) {
          nightRed--
        }
        if (nightGreen > morning[1]) {
          nightGreen--
        }
        if (nightBlue > morning[2]) {
          nightBlue--
        }

        ObjToChangeColor.style.background = `rgb(${copyOfNight})`

        clearInterval(intervalId)
        increaseDecrease()
      }, nightTimeInterval)
    }
    else if (JSON.stringify(copyOfNight) === JSON.stringify(morning)) {
      morningTime = true
      afternoonTime = false
      eveningTime = false
      nightTime = false

      morningRed = morning[0]
      morningGreen = morning[1]
      morningBlue = morning[2]
      copyOfMorning = [morningRed, morningGreen, morningBlue]
      increaseDecrease()

    }


  }
  increaseDecrease()

}
morningToEvening_changeColor([27, 52, 77], [105, 162, 255], [26, 12, 54], [5, 10, 15], sky)
// morningToEvening_changeColor([27,52,77], [108, 140, 172], [26, 12, 54], [5, 10, 15])

let sideMirror_LeftUpperSide;
let sideMirror_RightUpperSide;

sideMirrorsUpperSideArray.map((sideMirror) => {
  if(sideMirror.classList.contains("side-mirror-left-upper-side")){
    return sideMirror_LeftUpperSide = sideMirror
  }
  else{
    return sideMirror_RightUpperSide = sideMirror
  }
})

console.log(sideMirror_LeftUpperSide, sideMirror_RightUpperSide)
morningToEvening_changeColor([27, 52, 77], [105, 162, 255], [26, 12, 54], [5, 10, 15], sideMirror_LeftUpperSide)
morningToEvening_changeColor([27, 52, 77], [105, 162, 255], [26, 12, 54], [5, 10, 15], sideMirror_RightUpperSide)
















function createFirstClouds() {

  let randomCloudsFirstLoad = Math.floor(2 + Math.random() * 5)
  let arrayCloudsFirstLoad = new Array(randomCloudsFirstLoad)


  for (let i = 0; i < arrayCloudsFirstLoad.length; i++) {
    let cloudRandomSpeedInterval = Math.floor(10 + Math.random() * 50)

    let cloud_BottomRandom = Math.floor(50 + Math.random() * 300)
    let cloud_LeftPosition = Math.floor(-200 + Math.random() * 500)
    let cloud_WidthRandom = Math.floor(50 + Math.random() * 500)
    let cloud_HeightRandom = cloud_WidthRandom / Math.floor(1.5 + Math.random() * 15)
    let cloud_BorderRadiusRandom = Math.floor(50 + Math.random() * 10)
    let cloud_Blur = Math.floor(10 + Math.random() * 50)
    let cloud_Opacity = Math.floor(0.5 + Math.random() * 0.7)

    let cloudFirstLoad = document.createElement("div")
    cloudFirstLoad.classList.add("first-clouds")

    cloudFirstLoad.style.bottom = `${cloud_BottomRandom}px`
    cloudFirstLoad.style.left = `${cloud_LeftPosition}%`
    cloudFirstLoad.style.width = `${cloud_WidthRandom}px`
    cloudFirstLoad.style.height = `${cloud_HeightRandom}px`
    cloudFirstLoad.style.borderRadius = `${cloud_BorderRadiusRandom}% ${cloud_BorderRadiusRandom}% 50% 50%`
    cloudFirstLoad.style.filter = `blur(${cloud_Blur}px)`
    cloudFirstLoad.style.opacity = `${cloud_Opacity}px`
    cloudFirstLoad.style.background = "white";
    cloudsVector.appendChild(cloudFirstLoad)

    function increaseFirstCloudLeftPosition() {

      let intervalId1 = setInterval(() => {
        if (parseInt(cloudFirstLoad.style.left) < 1800) {
          cloud_LeftPosition = cloud_LeftPosition + 3
          cloudFirstLoad.style.left = `${cloud_LeftPosition}px`
          clearInterval(intervalId1)
          increaseFirstCloudLeftPosition()
        }
        else{
          cloud_LeftPosition = null
        }
      }, cloudRandomSpeedInterval)

    } // Ends "increaseCloudLeftPosition" Function Scope
    increaseFirstCloudLeftPosition()

  } // Ends For Loop Scope

}
createFirstClouds()















function cloudFunc() {
  let CloudCreatingRandomTime = Math.floor(20000 + Math.random() * 35000)

  let inervalId1 = setInterval(() => {
    let cloudRandomSpeedInterval = Math.floor(10 + Math.random() * 50)

    let cloudBottomRandom = Math.floor(50 + Math.random() * 300)
    let cloudWidthRandom = Math.floor(50 + Math.random() * 500)
    let cloudHeightRandom = cloudWidthRandom / Math.floor(1.5 + Math.random() * 15)
    let cloudBorderRadiusRandom = Math.floor(50 + Math.random() * 10)
    let cloudBlur = Math.floor(10 + Math.random() * 80)
    let cloudOpacity = Math.floor(0.1 + Math.random() * 1)
    let cloudLeftPosition = -500

    let cloud = document.createElement("div")
    cloud.classList.add("clouds")
    cloud.style.bottom = `${cloudBottomRandom}px`
    cloud.style.left = `${cloudLeftPosition}px`
    cloud.style.width = `${cloudWidthRandom}px`
    cloud.style.height = `${cloudHeightRandom}px`
    cloud.style.borderRadius = `${cloudBorderRadiusRandom}% ${cloudBorderRadiusRandom}% 50% 50%`
    cloud.style.filter = `blur(${cloudBlur}px)`
    cloud.style.opacity = `${cloudOpacity}px`
    cloud.style.background = "white";
    cloudsVector.appendChild(cloud)

    function increaseCloudLeftPosition() {

      let IntervalId2 = setInterval(() => {
        if (parseInt(cloud.style.left) < 1800) {
          cloudLeftPosition = cloudLeftPosition + 2
          cloud.style.left = `${cloudLeftPosition}px`

          let skyStyles = getComputedStyle(sky)
          let skyHeight = skyStyles.height
          cloudsVector.style.height = skyHeight

          let cloudStyles = getComputedStyle(cloud)
          let cloudBottom = cloudStyles.bottom
          let cloudWidth = cloudStyles.width
          let cloudHeight = cloudStyles.height
          cloud.style.bottom = cloudBottom
          cloud.style.width = cloudWidth
          cloud.style.height = cloudHeight

          clearInterval(IntervalId2)
          increaseCloudLeftPosition()

        }
        else{
          cloudLeftPosition = null
        }
      }, cloudRandomSpeedInterval)

    }
    increaseCloudLeftPosition()



    clearInterval(inervalId1)
    cloudFunc()
  }, CloudCreatingRandomTime)

}
cloudFunc()










function cloudsColorChange() {


  let intervalId = setInterval(() => {

    let cloudsOpacityRandom
    let cloudsVectorArray = [...cloudsVector.childNodes]

    if (nightTime == true) {
      cloudsVectorArray.map((cloudEl) => {
        cloudsOpacityRandom = Math.floor(0.05 + Math.random() * 0.1)
        cloudEl.style.opacity = `${cloudsOpacityRandom}px`
        cloudEl.style.background = "linear-gradient(175deg, rgb(80, 78, 92) 0% 75%, rgba(255, 0, 0, 0.2))";
        cloudEl.style.border = "10px solid rgb(57, 60, 64)";
      })
    }
    else if (eveningTime == true) {
      cloudsOpacityRandom = Math.floor(0.5 + Math.random() * 0.8)
      cloudsVectorArray.map((cloudEl) => {
        cloudEl.style.opacity = `${cloudsOpacityRandom}px`
        cloudEl.style.border = "none";
      })
    }
    else if (afternoonTime == true) {
      cloudsOpacityRandom = Math.floor(0.5 + Math.random() * 0.7)
      cloudsVectorArray.map((cloudEl) => {
        cloudEl.style.opacity = `${cloudsOpacityRandom}px`
        cloudEl.style.border = "none";
      })
    }
    else if (morningTime == true) {
      cloudsOpacityRandom = Math.floor(0.1 + Math.random() * 0.5)
      cloudsVectorArray.map((cloudEl) => {
        cloudEl.style.opacity = `${cloudsOpacityRandom}px`
        cloudEl.style.background = "white";
        cloudEl.style.border = "none";
      })
    }
    clearInterval(intervalId)
    cloudsColorChange()

  }, 100)


}
cloudsColorChange()













function createSunObj() {

  let sunObjGoesUp = true;
  let sunObjGoesDown = false;
  let sunObjLeftPosition = -50
  let sunObjBottomPosition = 50

  sunObj.style.left = sunObjLeftPosition + "px"
  sunObj.style.bottom = sunObjBottomPosition + "px"

  function startSunObjMoving() {

    let intervalId1 = setInterval(() => {
      if (morningTime || afternoonTime) {
        if (parseInt(sunObj.style.left) < 1500) {
          sunObjLeftPosition = sunObjLeftPosition + 1.5
          sunObj.style.left = sunObjLeftPosition + "px"

          if (parseInt(sunObj.style.bottom) < 300 && sunObjGoesUp) {
            sunObjBottomPosition = sunObjBottomPosition + 1
            sunObj.style.bottom = sunObjBottomPosition + "px"
          }
          else {
            sunObjGoesUp = false
            sunObjGoesDown = true
            sunObjBottomPosition = sunObjBottomPosition - 1.5
            sunObj.style.bottom = sunObjBottomPosition + "px"
          }
        }
        else if (parseInt(sunObj.style.left) >= 800) {
          sunObjLeftPosition = -50
          sunObjBottomPosition = 50

          sunObj.style.left = sunObjLeftPosition + "px"
          sunObj.style.bottom = sunObjBottomPosition + "px"

          sunObjGoesUp = true
          sunObjGoesDown = false
        }
        clearInterval(intervalId1)
        startSunObjMoving()
      }
      else {
        sunObjLeftPosition = -50
        sunObjBottomPosition = 50
        sunObjGoesUp = true
        sunObjGoesDown = false
      }
    }, dayTimeInterval / 1.5)

  }
  startSunObjMoving()

}
createSunObj()












function createMoonObj() {

  let moonObjGoesUp = true;
  let moonObjGoesDown = false;
  let moonObjLeftPosition = -50
  let moonObjBottomPosition = 50
  let moonPhaseRight = Math.floor(Math.random() * 100)

  moonObj.style.left = moonObjLeftPosition + "px"
  moonObj.style.bottom = moonObjBottomPosition + "px"

  function startMoonObjMoving() {
    moonPhase.style.right = -moonPhaseRight + "%"

    let intervalId1 = setInterval(() => {
      if (eveningTime || nightTime) {
        if (parseInt(moonObj.style.left) < 1500) {
          moonObjLeftPosition = moonObjLeftPosition + 1.5
          moonObj.style.left = moonObjLeftPosition + "px"

          if (parseInt(moonObj.style.bottom) < 300 && moonObjGoesUp) {
            moonObjBottomPosition = moonObjBottomPosition + 1
            moonObj.style.bottom = moonObjBottomPosition + "px"
          }
          else {
            moonObjGoesUp = false
            moonObjGoesDown = true
            moonObjBottomPosition = moonObjBottomPosition - 1.5
            moonObj.style.bottom = moonObjBottomPosition + "px"
          }
        }
        else if (parseInt(moonObj.style.left) >= 800) {
          moonObjLeftPosition = -50
          moonObjBottomPosition = 50

          moonObj.style.left = moonObjLeftPosition + "px"
          moonObj.style.bottom = moonObjBottomPosition + "px"

          moonObjGoesUp = true
          moonObjGoesDown = false
        }
        clearInterval(intervalId1)
        startMoonObjMoving()
      }
      else {
        moonObjLeftPosition = -50
        moonObjBottomPosition = 50
        moonObjGoesUp = true
        moonObjGoesDown = false
        moonPhaseRight = Math.floor(Math.random() * 100)
      }
    }, dayTimeInterval / 1.5)

  }
  startMoonObjMoving()

}
createMoonObj()













let starsColorsArr = [
  // "rgb(247, 247, 240)",
  // "rgb(235, 235, 202)",
  "rgb(240, 240, 173)",
  "rgb(237, 237, 100)",
  "rgb(247, 247, 52)",
  "rgb(111, 183, 237)",
  "rgb(37, 140, 217)",
  "rgb(18, 57, 163)"
]




function createStarsObj() {

  for (let i = 0; i < 50; i++) {
    let starObj = document.createElement("div")
    starObj.classList.add("star-obj")
    starObj.id = `${i}`
    sunMoonObjVector.appendChild(starObj)

    let randomLeftPosition = Math.floor(Math.random() * 1400)
    let randomTopPosition = Math.floor(Math.random() * 400)
    let randomHeight = Math.floor(Math.random() * 3)
    let randomWidth = randomHeight
    let randomOpacity = (Math.random() * 1).toFixed(1)
    let ArrayRandomIndex = Math.floor(Math.random() * starsColorsArr.length - 1)
    let randomColor = starsColorsArr[ArrayRandomIndex]

    starObj.style.height = randomHeight + "px"
    starObj.style.height = randomWidth + "px"
    starObj.style.top = randomTopPosition + "px"
    starObj.style.left = randomLeftPosition + "px"
    starObj.style.opacity = randomOpacity
    starObj.style.background = randomColor
  }
}
createStarsObj()











restart.removeEventListener("click", () => {
  window.location.href = window.location.href
})
restart.addEventListener("click", () => {
  window.location.href = window.location.href
})


restartMenu.removeEventListener("click", () => {
  window.location.href = window.location.href
})
restartMenu.addEventListener("click", () => {
  window.location.href = window.location.href
})





// Example For CSS
// https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages2.minutemediacdn.com%2Fimage%2Fupload%2Fc_crop%2Ch_1345%2Cw_1999%2Cx_0%2Cy_72%2Fv1576375961%2Fshape%2Fmentalfloss%2F63747-gettyimages-1126111628.jpg&imgrefurl=https%3A%2F%2Fwww.theshirelondon.com%2Fmembership%3Fweb%3D5.1.360776.1.24.31.signs%2Bin%2Bcar%2Bspeedometer&tbnid=ujeowKgMNaKOWM&vet=12ahUKEwjYq4qn6dP6AhXJxqQKHdZ_CtgQMygFegUIARDMAQ..i&docid=a39WhFy3IDBAfM&w=1999&h=1345&itg=1&q=car%20interior%20speedometer&ved=2ahUKEwjYq4qn6dP6AhXJxqQKHdZ_CtgQMygFegUIARDMAQ#imgrc=_6xqY4QQWQtJ1M&imgdii=ujeowKgMNaKOWM