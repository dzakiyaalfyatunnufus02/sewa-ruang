import React from "react";



const EditTabel = () => {


    return(
        <>
         <div className="bg-[#B3A492] lg:w-full md:w-[100%] md:h-[100vh] lg:p-[165px] md:p-[100px] py-[100px] px-[30px] h-[100vh] ">
        <center>
          {" "}
          <div className=" ">
          <div className="bg-[#BFB29E] shadow-lg flex flex-col lg:flex-row md:flex-row items-center  justify-center text-center p-[0px] md:p-[45px] lg:p-[70px]">
            <div className="lg:w-[820px] md:w-[800px] w-[150px]">
              <div className=" lg:gap-[10px] md:gap-[100px] ">
                <div className="lg:gap-[10px] ">
                  <p className="font-bold lg:mb-[10px] md:mb-[8px] mb-[5px] lg:text-[25px]">
                    Dz's Edit Rooms
                  </p>
                  <p className="italic">
                    {" "}
                    Ubah ruangan dengan mengisi formulir di samping ini dan
                    nikmati kenyaman fasilitas kami
                  </p>
                </div>
                <div className="italic">
                  <p>Terimakasih karena telah memilih kami</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:p-[10px] md:p-[15px] p-[10px]">
              <div>
               
                <input
                  placeholder="Room"
                  type="text"
                  className="lg:w-[350px] md:w-[262px] w-[130px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                />
                <input
                  placeholder="Floor"
                  type="text"
                  className="lg:w-[350px] md:w-[262px] w-[130px] md:h-[32px] lg:h-[35px] h-[25px] lg:rounded-[5px] md:rounded-[4px] rounded-[3px] border-0 bg-[lightgray] lg:p-[10px] md:p-[6px] p-[10px] mb-[5px]" // Tambahkan mb untuk margin-bottom
                />
              </div>
              <div className="flex justify-center lg:p-[10px] lg:gap-[10px] md:gap-[7px] gap-[5px]">
                  <button className="bg-stone-800 text-white lg:p-[3px] md:p-[3px] p-[] lg:w-[100px] md:w-[70px] w-[55px] lg:rounded-[10px] md:rounded-[7px] rounded-[4px]  ">
                    Create
                  </button>
                  <button className="bg-red-900 text-white lg:p-[3px] md:p-[3px]  md:w-[70px] md:rounded-[7px] lg:w-[80px] w-[55px] lg:rounded-[10px] rounded-[4px] ">
                    Back
                  </button>
                </div>
            </div>
          </div>
          </div>
        </center>
      </div>
        </>
    )
}
export default EditTabel;