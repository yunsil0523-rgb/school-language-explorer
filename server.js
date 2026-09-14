const express = require("express");
const path = require("path");
const {Translate} = require("@google-cloud/translate").v2;

const app = express();
app.use(express.json({limit:"100kb"}));
app.use(express.static(path.join(__dirname,"public")));

const PORT = process.env.PORT || 3000;
const client = new Translate(); // GOOGLE_APPLICATION_CREDENTIALS로 인증

app.post("/api/translate", async (req,res)=>{
  try{
    const {texts,target}=req.body;
    if(!Array.isArray(texts) || !texts.length) return res.status(400).json({error:"번역할 문장이 없습니다."});
    if(!/^[a-z]{2,5}(-[A-Z]{2})?$/.test(target||"")) return res.status(400).json({error:"지원하지 않는 언어 코드입니다."});
    const [translations] = await client.translate(texts,{to:target,format:"text"});
    const arr=Array.isArray(translations)?translations:[translations];
    res.json({translations:arr});
  }catch(e){
    console.error(e);
    res.status(500).json({error:"번역 API 연결에 실패했습니다. Google Cloud 인증과 API 활성화를 확인해 주세요."});
  }
});
app.get("/health",(req,res)=>res.json({ok:true}));
app.listen(PORT, "0.0.0.0", ()=>console.log(`학교 말 탐험대 서버: http://0.0.0.0:${PORT}`));
