import { useNavigate } from 'react-router-dom'
import { Header, Form } from './index'
import { useLoginForm } from '../hooks'

const Page = () => {
  const navigate = useNavigate()
  const { formData, error, fieldErrors, handleInputChange, handleSubmit } = useLoginForm()

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e, async (data) => {
      // Simple validation for demo
      if (data.email === 'john.doe@example.com' && data.password === 'password123') {
        navigate('/pin')
      } else {
        throw new Error('Invalid credentials')
      }
    })
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/BG-Image.jpg)' }}>
      <div className="min-h-screen bg-black bg-opacity-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-xl w-[400px] h-[542px]">
          <div className="p-8">
            <Header 
              title="Account Login" 
              subtitle="Please enter your details to sign in." 
            />
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            
            <Form
              formData={formData}
              fieldErrors={fieldErrors}
              onInputChange={handleInputChange}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
