import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import InputBox from './components/InputBox'

function App(){
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const convert = () =>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat
      bg-[url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg')] before:absolute before:inset-0 before:bg-black/50">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e)=>{e.preventDefault(); convert();}}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                onCurrencyChange={(curr)=>setFrom(curr)}
                                amount = {amount}
                                currencyoptions={options}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                                amountDisabled={false}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                                border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5
                                hover:bg-blue-700"
                                onClick={(e)=>{swap()}}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {convertedAmount}
                                currencyoptions={options}
                                onCurrencyChange={(curr)=>setTo(curr)}
                                selectCurrency={to}
                                amountDisabled={true}
                                
                            />
                        </div>
                        <button type="submit" 
                                className="w-full bg-amber-500 text-white px-4 py-3 rounded-lg
                                        hover:bg-amber-600 hover:shadow-lg
                                        ">
                            Convert 
                        </button>
                    </form>
                </div>           
            </div>
        </div>
    </>
  )
}


export default App
