const functions = require('firebase-functions');
const express=require('express')
const app=express();
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();

const cors = require('cors')({origin: true});
app.use(cors);



app.get('/users', async(req, res) => {
  (async () => {
    try {
        let query = firestore.collection('users');
        let response = [];
        await query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
            const selectedItem = {
                id: doc.id,
                data: doc.data()
            };
            response.push(selectedItem);
        }
        });
        // if(response===undefined) return res.send
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
});
app.get('/meetings', async(req, res) => {
  (async () => {
    try {
        let query = firestore.collection('meetings');
        let response = [];
        await query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
            const selectedItem = {
                id: doc.id,
                data: doc.data()
            };
            response.push(selectedItem);
        }
        });
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
});
app.get('/meetings/:meetingId', async(req, res) => {
  (async () => {
    try {
        const document = firestore.collection('meetings').doc(req.params.meetingId);
        let user = await document.get();
        let response = user.data();
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
});
app.get('/users/:userId', async(req, res) => {
  (async () => {
    try {
        const document = await firestore.collection('users').doc(req.params.userId);
        let user = await document.get();
        let response = user.data();
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
});

app.put('/users/update/:userId',async(req,res)=>{
  (async () => {try{
    const user=firestore.collection("users").doc(req.params.userId);
    await user.update(req.body)
    return res.status(200).send()
  }catch(err){
    console.log(err)
    return res.status(500).send(err)}
  })();
})

app.post('/users/create', (req, res) => {
  // const {id,email,firstName,lastName,password}=req.body;
  (async () => {
      try {
      await firestore.collection('users').doc(req.body.email).set(req.body)
        return res.status(200).send();
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })()});
        app.post('/meetings/create', (req, res) => {
          // const {id,email,firstName,lastName,password}=req.body;
          (async () => {
              try {
              const lat=req.body.location.latitude
              const lng=req.body.location.longitude
                console.log(typeof req.body.date)
             await firestore.collection('meetings').doc(req.body.name).set({
                name:req.body.name,
                description:req.body.description,
                location: new admin.firestore.GeoPoint(lat,lng),
                date:req.body.date
              })

              const document = await firestore.collection('meetings').doc(req.body.name);
              let user = await document.get();
              let response = user.data();
               return res.status(200).send(response);

              } catch (error) {
                console.log(error);
                return res.status(500).send(error);
              }
            })()});
exports.api=functions.https.onRequest(app);
