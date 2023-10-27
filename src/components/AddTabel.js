import React from "react";



const AddTabel = () => {


    return(
        <>
         <div className="bg-[#B3A492] lg:w-full lg:p-[165px] ">
        <center>
          {" "}
          <div className="bg-[#BFB29E] shadow-lg flex items-center justify-center text-center lg:p-[70px]">
            <div className="    lg:w-[820px]">
              <div className=" lg:gap-[10px]">
                <div className="lg:gap-[10px]">
                  <p className="font-bold lg:mb-[10px] lg:text-[25px]">
                    Dz's Create Rooms
                  </p>
                  <p className="italic">
                    {" "}
                    Buat ruangan baru dengan mengisi formulir di samping ini dan
                    nikmati kenyaman fasilitas kami
                  </p>
                </div>
                <div className="italic">
                  <p>Terimakasih karena telah memilih kami</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:p-[10px]">
              <div>
               
                <input
                  placeholder="Room"
                  type="text"
                  className="lg:w-[350px] md:w-[262px] w-[250px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                />
                <input
                  placeholder="Floor"
                  type="text"
                  className="lg:w-[350px] md:w-[262px] w-[250px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                />
              </div>
              <div className="flex justify-center lg:p-[10px] lg:gap-[10px]">
                  <button className="bg-stone-800 text-white lg:p-[3px] lg:w-[100px] lg:rounded-[10px]  ">
                    Create
                  </button>
                  <button className="bg-red-900 text-white lg:p-[3px] lg:w-[80px] lg:rounded-[10px] ">
                    Back
                  </button>
                </div>
            </div>
          </div>
        </center>
      </div>
        </>
    )
}
export default AddTabel;