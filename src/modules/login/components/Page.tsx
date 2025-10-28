import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header, Form } from './index'
import { useLoginForm } from '../hooks'

const Page = () => {
  const navigate = useNavigate()
  const { formData, error, fieldErrors, handleInputChange, handleSubmit, isLoading } = useLoginForm()

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e, async (data) => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      if (data.email === 'john.doe@example.com' && data.password === 'password123') {
        navigate('/map-pin-board')
      } else {
        throw new Error('Invalid credentials')
      }
    })
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/BG-Image.jpg)' }}>
      <motion.div 
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.8) 0%, rgba(30, 58, 138, 0.6) 30%, rgba(59, 130, 246, 0.4) 60%, transparent 80%)',
          mixBlendMode: 'multiply'
        }}
      />
      
      <div className="min-h-screen bg-black bg-opacity-50 flex items-center justify-center px-4 relative z-10">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md sm:w-[400px] min-h-[500px] sm:h-[542px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="p-6 sm:p-12 flex flex-col" style={{ gap: '32px' }}>
            <Header 
              title="Account Login" 
              subtitle="Please enter your details to sign in." 
            />
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="px-3 py-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm"
                style={{ marginTop: '-10px', marginBottom: '-10px' }}
              >
                {error}
              </motion.div>
            )}
            
            <Form
              formData={formData}
              fieldErrors={fieldErrors}
              onInputChange={handleInputChange}
              onSubmit={handleFormSubmit}
              isLoading={isLoading}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Page
