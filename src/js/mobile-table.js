const PLANS = [
  {
    name: 'basic',
    data: {
      monthlyPrice: '4.99 US$',
      quality: 'Buena',
      resolution: '720p (HD)',
      surroundSound: false,
      isOnAllDevices: true,
      simultaneousDevices: 1,
      downloadOnDevices: 1,
    },
  },
  {
    name: 'standard',
    data: {
      monthlyPrice: '7.99 US$',
      quality: 'Muy Buena',
      resolution: '1080p (Full HD)',
      surroundSound: false,
      isOnAllDevices: true,
      simultaneousDevices: 2,
      downloadOnDevices: 2,
    },
  },
  {
    name: 'premium',
    data: {
      monthlyPrice: '10.99 US$',
      quality: 'La Mejor',
      resolution: '4K (Ultra HD)',
      surroundSound: true,
      isOnAllDevices: true,
      simultaneousDevices: 4,
      downloadOnDevices: 6,
    },
  },
];

let selectedPlan = 'basic';

const table = document.querySelector('.table-mobile');
const buttons = document.querySelectorAll('.plan-btn');

buttons.forEach((btn) => {
  btn.onclick = handlePlanButtonClick;
});

function handlePlanButtonClick(e) {
  const targetBtn = e.target;
  changePlan(targetBtn.id);

  buttons.forEach((btn) => {
    if (btn === targetBtn) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

function changePlan(planName) {
  const newPlan = PLANS.find((p) => p.name === planName) || null;
  if (newPlan) {
    renderPlan(newPlan);
    selectedPlan = planName;
  }
}

function renderPlan(plan) {
  const monthlyPrice = document.querySelector('#monthly-price');
  const quality = document.querySelector('#quality');
  const resolution = document.querySelector('#resolution');
  const surroundSound = document.querySelector('#surround-sound');
  const allDevices = document.querySelector('#all-devices');
  const simultaneousDevices = document.querySelector('#simultaneous-devices');
  const downloads = document.querySelector('#downloads');

  monthlyPrice.textContent = plan.data.monthlyPrice;
  quality.textContent = plan.data.quality;
  resolution.textContent = plan.data.resolution;
  surroundSound.textContent = plan.data.surroundSound ? '✓' : '-';
  allDevices.textContent = plan.data.isOnAllDevices ? '✓' : '-';
  simultaneousDevices.textContent = plan.data.simultaneousDevices;
  downloads.textContent = plan.data.downloadOnDevices;
}
