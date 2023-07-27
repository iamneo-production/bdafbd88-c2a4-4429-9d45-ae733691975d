const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await page.goto('https://8081-ffeefccdcaadefffdddfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
=======
    await page.goto('https://8081-efdefdeabaedfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 6de141319ae8dd8f81da734fb204cc46bf357a8b
=======
    await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> a18377425ba42cce6393bc76ac2d1135e8a09cbc
=======
    await page.goto('https://8081-abceaedeebdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> ad124189fbcb2d601123e9cae47b76b02520e130
=======
    await page.goto('https://8081-dbcecefdbeabbdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 17f4fe67fdc53620d81a5f8dfb53bbcd54bcaaf0
=======
    await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> 9301475c74331303918272edc04a13ce1257d786
=======
    await page.goto('https://8081-abfcdfdefdfdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
=======
    await page.goto('https://8081-dafedbdadebdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> d8cd57955b9521366c5f050e2192611d520b7b4a
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_Signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await page.goto('https://8081-ffeefccdcaadefffdddfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
=======
    await page.goto('https://8081-efdefdeabaedfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 6de141319ae8dd8f81da734fb204cc46bf357a8b
=======
    await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> a18377425ba42cce6393bc76ac2d1135e8a09cbc
=======
    await page.goto('https://8081-abceaedeebdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> ad124189fbcb2d601123e9cae47b76b02520e130
=======
    await page.goto('https://8081-dbcecefdbeabbdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 17f4fe67fdc53620d81a5f8dfb53bbcd54bcaaf0
=======
    await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> 9301475c74331303918272edc04a13ce1257d786
=======
    await page.goto('https://8081-abfcdfdefdfdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
=======
    await page.goto('https://8081-dafedbdadebdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> d8cd57955b9521366c5f050e2192611d520b7b4a
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#homeButton',{timeout:3000});
      console.log('TESTCASE:FE_Login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await page.goto('https://8081-ffeefccdcaadefffdddfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
=======
    await page.goto('https://8081-efdefdeabaedfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 6de141319ae8dd8f81da734fb204cc46bf357a8b
=======
    await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> a18377425ba42cce6393bc76ac2d1135e8a09cbc
=======
    await page.goto('https://8081-abceaedeebdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> ad124189fbcb2d601123e9cae47b76b02520e130
=======
    await page.goto('https://8081-dbcecefdbeabbdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 17f4fe67fdc53620d81a5f8dfb53bbcd54bcaaf0
=======
    await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> 9301475c74331303918272edc04a13ce1257d786
=======
    await page.goto('https://8081-abfcdfdefdfdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
=======
    await page.goto('https://8081-dafedbdadebdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> d8cd57955b9521366c5f050e2192611d520b7b4a
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#userHomeButton',{timeout:3000});
      await page.click('#userHomeButton');
      await page.waitForSelector('#userGrid1',{timeout:3000});
      await page.click('#userGrid1');
      await page.waitForSelector('#applyButton',{timeout:3000});
      await page.click('#logout');
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_UserHomeOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_UserHomeOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  await page.goto('https://8081-ffeefccdcaadefffdddfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
=======
  await page.goto('https://8081-efdefdeabaedfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 6de141319ae8dd8f81da734fb204cc46bf357a8b
=======
  await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> a18377425ba42cce6393bc76ac2d1135e8a09cbc
=======
  await page.goto('https://8081-abceaedeebdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> ad124189fbcb2d601123e9cae47b76b02520e130
=======
  await page.goto('https://8081-dbcecefdbeabbdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 17f4fe67fdc53620d81a5f8dfb53bbcd54bcaaf0
=======
  await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> 9301475c74331303918272edc04a13ce1257d786
=======
  await page.goto('https://8081-abfcdfdefdfdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
=======
  await page.goto('https://8081-dafedbdadebdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> d8cd57955b9521366c5f050e2192611d520b7b4a
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.type('#email', 'test@gmail.com');
  await page.type('#password', 'Test@123');
  await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#userAppliedJobs',{timeout:3000});
    await page.click('#userAppliedJobs');
    await page.waitForSelector('#AppliedGrid1',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_UserJobOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_UserJobOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  await page.goto('https://8081-ffeefccdcaadefffdddfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
=======
  await page.goto('https://8081-efdefdeabaedfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 6de141319ae8dd8f81da734fb204cc46bf357a8b
=======
  await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> a18377425ba42cce6393bc76ac2d1135e8a09cbc
=======
  await page.goto('https://8081-abceaedeebdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> ad124189fbcb2d601123e9cae47b76b02520e130
=======
  await page.goto('https://8081-dbcecefdbeabbdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 17f4fe67fdc53620d81a5f8dfb53bbcd54bcaaf0
=======
  await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> 9301475c74331303918272edc04a13ce1257d786
=======
  await page.goto('https://8081-abfcdfdefdfdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
=======
  await page.goto('https://8081-dafedbdadebdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> d8cd57955b9521366c5f050e2192611d520b7b4a
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#addOpenings',{timeout:3000});
    await page.click('#addOpenings');
    await page.waitForSelector('#searchButton',{timeout:3000});
    await page.click('#appliedCandidates');
    await page.waitForSelector('#candidatesGrid1',{timeout:3000});
    console.log('TESTCASE:FE_CustomerOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_CustomerOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  await page.goto('https://8081-ffeefccdcaadefffdddfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
=======
  await page.goto('https://8081-efdefdeabaedfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 6de141319ae8dd8f81da734fb204cc46bf357a8b
=======
  await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> a18377425ba42cce6393bc76ac2d1135e8a09cbc
=======
  await page.goto('https://8081-abceaedeebdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> ad124189fbcb2d601123e9cae47b76b02520e130
=======
  await page.goto('https://8081-dbcecefdbeabbdfdacbbbcdfebbabeccbdacfaebfdca.project.examly.io/');
>>>>>>> 17f4fe67fdc53620d81a5f8dfb53bbcd54bcaaf0
=======
  await page.goto('https://8081-eaefdaecbadadfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> 9301475c74331303918272edc04a13ce1257d786
=======
  await page.goto('https://8081-abfcdfdefdfdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
=======
  await page.goto('https://8081-dafedbdadebdfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/');
>>>>>>> d8cd57955b9521366c5f050e2192611d520b7b4a
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#AdminOpenings',{timeout:3000});
    await page.click('#AdminOpenings');
    await page.waitForSelector('#adminOpeningGrid1',{timeout:3000});
    await page.click('#AdminCandidates');
    await page.waitForSelector('#adminCandidatesGrid1',{timeout:3000});
    console.log('TESTCASE:FE_AdminOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_AdminOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();