const liff = window.liff;
const liffMockPlugin = window.liffMock;

liff.use(new liffMockPlugin());

const main = () => {
  document.getElementById('init_btn').onclick = onInitClick;
  document.getElementById('login_btn').onclick = login;
  document.getElementById('get_profile_btn').onclick = getProfile;
};

const onInitClick = async () => {
  try {
    await liff.init({
      liffId: 'xxx',
      mock: true,
    });
    console.log('liff.init done');
  } catch (e) {
    console.error('liff.init error', e);
  }
};

const login = async () => {
  try {
    await liff.login();
    console.log('liff.login done');
  } catch (e) {
    console.error('liff.login error', e);
  }
};

const getProfile = async () => {
  try {
    const profile = await liff.getProfile();
    console.log('liff.getProfile: ', profile);
  } catch (e) {
    console.error('liff.getProfile error', e);
  }
};

window.onload = main;
