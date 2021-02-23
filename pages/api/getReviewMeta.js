const admin = require('firebase-admin');

const serviceAccount = require('../../gtbant-46196-firebase-adminsdk-t1yk7-e942123ab8.json');

export async function getReviewMetaHelper(req, res) {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  const db = admin.firestore();

  const reviewsRef = db.collection('reviews');
  const snapshot = await reviewsRef.get();
  const reviews = [];
  snapshot.forEach((doc) => {
    reviews.push(doc.data().rating);
  });
  const calcAverage = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    const average = sum / arr.length;
    return Math.round(average * 10) / 10;
  };
  if (snapshot) {
    return res.status(200).json({
      success: true,
      data: {
        totalReviews: reviews.length,
        averageRating: calcAverage(reviews),
      },
    });
  }
  return res.status(503).json({ success: false });
}

export default function getReviewMeta(req, res) {
  getReviewMetaHelper(req, res);
}
