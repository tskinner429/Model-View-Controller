const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
   const commentData = await Comment.create({
    commentBody: req.body.commentBody,
    userId: req.session.userId
   })
   res.status(200).json(commentData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
