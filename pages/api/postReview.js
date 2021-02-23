const admin = require('firebase-admin');

const serviceAccount = require('../../gtbant-46196-firebase-adminsdk-t1yk7-e942123ab8.json');

export default async (req, res) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  const db = admin.firestore();
  const {
    avatarIndex, name, rating, subject, review
  } = JSON.parse(req.body);

  const result = await db.collection('cities').add({
    avatarIndex,
    name,
    rating,
    subject,
    review,
    timesStamp: admin.firestore.Timestamp.fromDate(new Date()),
  });

  res.status(200).json({ success: true });
};
