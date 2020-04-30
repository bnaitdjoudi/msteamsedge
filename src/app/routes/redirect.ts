import { Router } from 'express';
const router = Router();
const targetBaseUrl = 'http://localhost:8081';
router.get('/*', (req, res) => {
  const targetUrl = targetBaseUrl + req.originalUrl;
  console.log(targetUrl);  
  return res.redirect(targetUrl);
});
export default router;