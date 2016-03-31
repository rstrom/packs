export default (scriptSrc='bundle.js', title='Survey') => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
  <!--[if IE]>
    <div>
      <h2>You are using an unsupported browser</h2>
      <p>To complete this survey, please update your web browser at <a href="http://whatbrowser.org">http://whatbrowser.org</a></p>
    </div>
  <![endif]-->
  <div id="container">
  </div>
  <script type="text/javascript" src="${scriptSrc}"></script>
</body>
</html>
`