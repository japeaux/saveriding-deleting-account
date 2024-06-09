export default async (req, res) => {
    try {
      const response = await fetch(
        `https://dev-api.savebiking.com/api/v1/login`,
        {
          body: JSON.stringify({
              email: 'lucascovatti@hotmail.com',
              password: 'lucas123'
          }),
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      );
  
      if (response.status >= 400) {
        return res.status(400).json({
          error: 'There was an error'
        });
      }
  
      return res.status(200).json({ status: 'ok' });
    } catch (error) {
      return res.status(500).json({
        error: 'There was an error'
      });
    }
  };