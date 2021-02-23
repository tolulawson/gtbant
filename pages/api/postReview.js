const admin = require('firebase-admin');

const serviceAccount = require('../../gtbant-46196-firebase-adminsdk-t1yk7-e942123ab8.json');

export default async (req, res) => {
  const data = JSON.parse(req.body);

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();
  // if (process.env.HOST) {
  //   db.settings({
  //     host: process.env.HOST,
  //     ssl: false,
  //   });
  // }

  const result = await db.collection('reviews').add({
    ...data,
    name: !data.name ? null : data.name,
    rating: !data.rating ? 1 : data.rating,
    timestamp: Date.now(),
  });
  if (result) {
    res.status(200).json({ success: true });
  } else {
    res.status(503).json({ success: false });
  }
};
