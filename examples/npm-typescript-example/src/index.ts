import liff from '@line/liff';
import LiffMockPlugin from '@line/liff-mock';

liff.use(new LiffMockPlugin());

const main = () => {
  document.getElementById('init_btn')!.onclick = onInitClick;
  document.getElementById('login_btn')!.onclick = login;
  document.getElementById('get_profile_btn')!.onclick = getProfile;
};

const onInitClick = async () => {
  try {
    await liff.init({
      liffId: 'xxx',
      mock: true,
    });
  } catch (e) {
    console.error('liff.init error', e);
  }
};

const login = async () => {
  try {
    await liff.login();
  } catch (e) {
    console.error('liff.login error', e);
  }
};

const getProfile = async () => {
  try {
    const profile = await liff.getProfile();
    console.log(profile);
  } catch (e) {
    console.error('liff.getProfile error', e);
  }
};

window.onload = main;
