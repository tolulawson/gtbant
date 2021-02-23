const admin = require('firebase-admin');

export default async (req, res) => {
  const data = JSON.parse(req.body);

  if (!admin.apps.length) {
    // admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount),
    // });
    admin.initializeApp({
      credential: admin.credential.cert({
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        project_id: process.env.project_id,
      }),
      databaseURL: process.env.databaseURL,
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
