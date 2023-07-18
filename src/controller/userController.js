import axios from 'axios'

const getUserController = async (req, res) => { 
    const baseUrl = process.env.BASE_API_URL

    if (req.method === 'GET') {
        const getUserUrl = `${baseUrl}/api/users/user`

        try {
            const config = {
                headers: {
                    'content-type': 'application/json',
                    // Authorization: `Bearer ${accessToken}`
                }
            }
            const { data } = await axios.get(
                getUserUrl,
                config
            )
            
            console.log('response get user controller:', data)
            console.log('req.query', req.query)

            res.status(200).json({
                success: true,
                message: 'success!',
                data: data
            })
        } catch (error) {
            res.status(201).json({
                success: false,
                message: error.response
            })
            console.log('err in getAdminsController controller:', error.response)
        }
    } else {
        res.status(401).json({
            success: false,
            message: 'Get method not allowed!'
        })
    }
}

export {
    getUserController
}