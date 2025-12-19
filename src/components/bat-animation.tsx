"use client";

export function BatAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden">
      <style jsx>{`
        .bat-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        .bat {
          width: 1px;
          height: 1px;
          transform: scale(3);
          position: relative;
          animation: 0.4s bat steps(1) infinite;
        }

        @keyframes bat {
          0% {
            box-shadow: 33px 6px #54556b, 34px 6px #54556b, 35px 6px #54556b, 36px 6px #54556b, 20px 7px #54556b, 21px 7px #54556b, 22px 7px #54556b, 23px 7px #54556b, 33px 7px #54556b, 34px 7px #54556b, 35px 7px #202020, 36px 7px #202020, 37px 7px #54556b, 38px 7px #54556b, 39px 7px #54556b, 43px 7px #54556b, 20px 8px #54556b, 21px 8px #54556b, 22px 8px #54556b, 23px 8px #54556b, 33px 8px #54556b, 34px 8px #54556b, 35px 8px #202020, 36px 8px #202020, 37px 8px #54556b, 38px 8px #54556b, 39px 8px #54556b, 43px 8px #54556b, 17px 9px #54556b, 18px 9px #54556b, 19px 9px #54556b, 20px 9px #54556b, 35px 9px #54556b, 36px 9px #202020, 37px 9px #202020, 38px 9px #202020, 39px 9px #202020, 40px 9px #54556b, 41px 9px #54556b, 42px 9px #54556b, 43px 9px #202020, 44px 9px #54556b, 45px 9px #54556b, 16px 10px #54556b, 17px 10px #202020, 18px 10px #202020, 19px 10px #202020, 20px 10px #54556b, 36px 10px #54556b, 37px 10px #202020, 38px 10px #202020, 39px 10px #202020, 40px 10px #202020, 41px 10px #202020, 42px 10px #202020, 43px 10px #202020, 44px 10px #54556b, 45px 10px #54556b, 16px 11px #54556b, 17px 11px #202020, 18px 11px #202020, 19px 11px #202020, 20px 11px #54556b, 36px 11px #54556b, 37px 11px #202020, 38px 11px #202020, 39px 11px #202020, 40px 11px #202020, 41px 11px #202020, 42px 11px #202020, 43px 11px #202020, 44px 11px #54556b, 45px 11px #54556b, 35px 37px #202020, 36px 37px #54556b, 37px 37px #202020, 38px 37px #202020, 39px 37px #54556b, 40px 37px #54556b, 41px 37px #54556b, 42px 37px #54556b, 43px 37px #54556b, 44px 37px #202020, 45px 37px #202020, 46px 37px #54556b;
          }
          14.3% {
            box-shadow: 33px 7px #54556b, 34px 7px #54556b, 35px 7px #54556b, 36px 7px #54556b, 21px 8px #54556b, 22px 8px #54556b, 23px 8px #54556b, 24px 8px #54556b, 33px 8px #54556b, 34px 8px #54556b, 35px 8px #202020, 36px 8px #202020, 37px 8px #54556b, 38px 8px #54556b, 39px 8px #54556b, 40px 8px #54556b, 43px 8px #54556b, 20px 9px #54556b, 21px 9px #54556b, 22px 9px #54556b, 23px 9px #54556b, 24px 9px #54556b, 33px 9px #54556b, 34px 9px #202020, 35px 9px #202020, 36px 9px #202020, 37px 9px #202020, 38px 9px #54556b, 39px 9px #54556b, 40px 9px #54556b, 43px 9px #54556b, 44px 9px #54556b, 18px 10px #54556b, 19px 10px #54556b, 20px 10px #54556b, 21px 10px #54556b, 35px 10px #54556b, 36px 10px #202020, 37px 10px #202020, 38px 10px #202020, 39px 10px #202020, 40px 10px #54556b, 41px 10px #54556b, 42px 10px #54556b, 43px 10px #202020, 44px 10px #54556b, 45px 10px #54556b, 46px 10px #54556b;
          }
          28.6% {
            box-shadow: 34px 8px #54556b, 35px 8px #54556b, 36px 8px #54556b, 37px 8px #54556b, 21px 9px #54556b, 22px 9px #54556b, 23px 9px #54556b, 24px 9px #54556b, 34px 9px #54556b, 35px 9px #54556b, 36px 9px #202020, 37px 9px #202020, 38px 9px #54556b, 39px 9px #54556b, 40px 9px #54556b, 41px 9px #54556b, 42px 9px #54556b, 43px 9px #54556b, 44px 9px #54556b, 20px 10px #54556b, 21px 10px #54556b, 22px 10px #54556b, 23px 10px #54556b, 24px 10px #54556b, 34px 10px #54556b, 35px 10px #202020, 36px 10px #202020, 37px 10px #202020, 38px 10px #202020, 39px 10px #54556b, 40px 10px #54556b, 41px 10px #54556b, 42px 10px #54556b, 43px 10px #54556b, 44px 10px #54556b, 45px 10px #54556b, 19px 11px #54556b, 20px 11px #54556b, 21px 11px #54556b, 22px 11px #54556b, 36px 11px #54556b, 37px 11px #202020, 38px 11px #202020, 39px 11px #202020, 40px 11px #202020, 41px 11px #54556b, 42px 11px #54556b, 43px 11px #54556b, 44px 11px #202020, 45px 11px #54556b, 46px 11px #54556b, 47px 11px #54556b;
          }
          42.9% {
            box-shadow: 34px 9px #54556b, 35px 9px #54556b, 36px 9px #54556b, 37px 9px #54556b, 22px 10px #54556b, 23px 10px #54556b, 24px 10px #54556b, 25px 10px #54556b, 34px 10px #54556b, 35px 10px #54556b, 36px 10px #202020, 37px 10px #202020, 38px 10px #54556b, 39px 10px #54556b, 40px 10px #54556b, 41px 10px #54556b, 42px 10px #54556b, 43px 10px #54556b, 44px 10px #54556b, 45px 10px #54556b, 21px 11px #54556b, 22px 11px #54556b, 23px 11px #54556b, 24px 11px #54556b, 25px 11px #54556b, 34px 11px #54556b, 35px 11px #202020, 36px 11px #202020, 37px 11px #202020, 38px 11px #202020, 39px 11px #54556b, 40px 11px #54556b, 41px 11px #54556b, 42px 11px #54556b, 43px 11px #54556b, 44px 11px #54556b, 45px 11px #54556b, 46px 11px #54556b;
          }
          57.2% {
            box-shadow: 35px 10px #54556b, 36px 10px #54556b, 37px 10px #54556b, 38px 10px #54556b, 22px 11px #54556b, 23px 11px #54556b, 24px 11px #54556b, 25px 11px #54556b, 35px 11px #54556b, 36px 11px #54556b, 37px 11px #202020, 38px 11px #202020, 39px 11px #54556b, 40px 11px #54556b, 41px 11px #54556b, 42px 11px #54556b, 43px 11px #54556b, 44px 11px #54556b, 45px 11px #54556b, 46px 11px #54556b, 21px 12px #54556b, 22px 12px #54556b, 23px 12px #54556b, 24px 12px #54556b, 25px 12px #54556b, 26px 12px #54556b, 35px 12px #54556b, 36px 12px #202020, 37px 12px #202020, 38px 12px #202020, 39px 12px #202020, 40px 12px #54556b, 41px 12px #54556b, 42px 12px #54556b, 43px 12px #54556b, 44px 12px #54556b, 45px 12px #54556b, 46px 12px #54556b, 47px 12px #54556b;
          }
          71.5% {
            box-shadow: 35px 11px #54556b, 36px 11px #54556b, 37px 11px #54556b, 38px 11px #54556b, 23px 12px #54556b, 24px 12px #54556b, 25px 12px #54556b, 26px 12px #54556b, 35px 12px #54556b, 36px 12px #54556b, 37px 12px #202020, 38px 12px #202020, 39px 12px #54556b, 40px 12px #54556b, 41px 12px #54556b, 42px 12px #54556b, 43px 12px #54556b, 44px 12px #54556b, 45px 12px #54556b, 46px 12px #54556b, 47px 12px #54556b, 22px 13px #54556b, 23px 13px #54556b, 24px 13px #54556b, 25px 13px #54556b, 26px 13px #54556b, 27px 13px #54556b, 35px 13px #54556b, 36px 13px #202020, 37px 13px #202020, 38px 13px #202020, 39px 13px #202020, 40px 13px #54556b, 41px 13px #54556b, 42px 13px #54556b, 43px 13px #54556b, 44px 13px #54556b, 45px 13px #54556b, 46px 13px #54556b, 47px 13px #54556b, 48px 13px #54556b;
          }
          85.8% {
            box-shadow: 36px 12px #54556b, 37px 12px #54556b, 38px 12px #54556b, 39px 12px #54556b, 23px 13px #54556b, 24px 13px #54556b, 25px 13px #54556b, 26px 13px #54556b, 36px 13px #54556b, 37px 13px #54556b, 38px 13px #202020, 39px 13px #202020, 40px 13px #54556b, 41px 13px #54556b, 42px 13px #54556b, 43px 13px #54556b, 44px 13px #54556b, 45px 13px #54556b, 46px 13px #54556b, 47px 13px #54556b, 48px 13px #54556b, 22px 14px #54556b, 23px 14px #54556b, 24px 14px #54556b, 25px 14px #54556b, 26px 14px #54556b, 27px 14px #54556b, 36px 14px #54556b, 37px 14px #202020, 38px 14px #202020, 39px 14px #202020, 40px 14px #202020, 41px 14px #54556b, 42px 14px #54556b, 43px 14px #54556b, 44px 14px #54556b, 45px 14px #54556b, 46px 14px #54556b, 47px 14px #54556b, 48px 14px #54556b, 49px 14px #54556b;
          }
          100% {
            box-shadow: 37px 13px #54556b, 38px 13px #54556b, 39px 13px #54556b, 40px 13px #54556b, 24px 14px #54556b, 25px 14px #54556b, 26px 14px #54556b, 27px 14px #54556b, 37px 14px #54556b, 38px 14px #54556b, 39px 14px #202020, 40px 14px #202020, 41px 14px #54556b, 42px 14px #54556b, 43px 14px #54556b, 44px 14px #54556b, 45px 14px #54556b, 46px 14px #54556b, 47px 14px #54556b, 48px 14px #54556b, 49px 14px #54556b, 23px 15px #54556b, 24px 15px #54556b, 25px 15px #54556b, 26px 15px #54556b, 27px 15px #54556b, 28px 15px #54556b, 37px 15px #54556b, 38px 15px #202020, 39px 15px #202020, 40px 15px #202020, 41px 15px #202020, 42px 15px #54556b, 43px 15px #54556b, 44px 15px #54556b, 45px 15px #54556b, 46px 15px #54556b, 47px 15px #54556b, 48px 15px #54556b, 49px 15px #54556b, 50px 15px #54556b;
          }
        }
      `}</style>
      <div className="bat-container">
        <div className="bat"></div>
      </div>
    </div>
  );
}
