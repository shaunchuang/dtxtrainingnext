'use client';

import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft, faCalendarCheck, faBan } from '@fortawesome/free-solid-svg-icons';




const FormPage = () => {
  const [step, setStep] = useState(1);

  const steps = ['info', 'phealth', 'evaluation', 'appo'];

  const [formData, setFormData] = useState<{ [key: string]: string }>({});


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.getAttribute('data-item') || '']: e.target.value });
  };


  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.getAttribute('data-item') || '']: e.target.value });
  };

  const handleNext = () => {
      if (step < 4) {
          setStep(step + 1);
      }
  };

  const handlePrev = () => {
      if (step > 1) {
          setStep(step - 1);
      }
  };

  const renderStep = () => {
      switch (step) {
          case 1:
              return <InfoStep formData={formData} handleChange={handleChange} handleSelectChange={handleSelectChange}/>;
          case 2:
              return <PHealthStep formData={formData} handleChange={handleChange} />;
          case 3:
              return <EvaluationStep />;
          case 4:
              return <AppoStep />;
          default:
              return null;
      }
  };

  const InfoStep = ({ formData, handleChange,handleSelectChange }: any) => (
    <fieldset className="space-y-6" data-api="/division/api/createUserForm">
      <div className="grid grid-cols-2 gap-4">
        {/* First Row */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">姓名:</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-item="3"
            placeholder="請輸入看診個案姓名"
            value={formData['3'] || ''}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">電子信箱:</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-item="8"
            onChange={handleChange}
          />
        </div>

        {/* Second Row */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">性別:</label>
          <select
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-item="4"
            onChange={handleSelectChange}
          >
            <option value="">請選擇</option>
            <option value="M">男性</option>
            <option value="F">女性</option>
          </select>
        </div>
        <div className="space-y-2 row-span-2">
          <label className="block font-medium text-gray-700">聯絡地址:</label>
          {/* <div id="contact_twzipcode" className="zipcode form-inline"></div> */}
          <input
            type="text"
            id="contactAddress"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-item="11"
            placeholder="請輸入聯絡地址"
            onChange={handleChange}
          />
        </div>

        {/* Third Row */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">身分證字號:</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-item="2"
            onChange={handleChange}
          />
        </div>

        {/* Fourth Row */}
        <div className="space-y-2">
            <label className="block font-medium text-gray-700">出生日期:</label>
          <input type="hidden" className="w-full border rounded px-2 py-1" data-item="5" onChange={handleChange} />
          <input type="hidden" className="w-full border rounded px-2 py-1" data-item="6" onChange={handleChange} />
        </div>
        <div className="space-y-2">
            <label className="block font-medium text-gray-700">緊急聯絡人姓名:</label>
            <div className="flex items-center space-x-2">
              <input type="text" className="w-full border rounded px-3 py-2 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500" data-item="12" placeholder="請輸入姓名" onChange={handleChange} />
              <label className=" font-medium text-gray-700">關係:</label>
              <select className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" data-item="13" onChange={handleSelectChange}>
                <option value="">請選擇</option>
                <option value="GRFTH">GRFTH</option>
                <option value="GRMTH">GRMTH</option>
                <option value="INLAW">INLAW</option>
                <option value="FTH">FTH</option>
                <option value="MTH">MTH</option>
                <option value="UNCLE">UNCLE</option>
                <option value="AUNT">AUNT</option>
                <option value="COUSN">COUSN</option>
              </select>
            </div>
        </div>

        {/* Fifth Row */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">聯絡電話:</label>
          <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" data-item="7" value={""} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">緊急聯絡人電話:</label>
          <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" data-item="14" placeholder="請輸入緊急連絡人電話" onChange={handleChange} />
        </div>
      </div>
    </fieldset>
  );
  const PHealthStep = ({formData,handleChange}: any) => (
    <fieldset className="space-y-4" data-api="/division/api/editUserForm">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-b">
            <td className="p-2">個人病史：</td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-2">藥物過敏史：</td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-2">主要適應症(擇一)：</td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className='bg-gray-100'>
            <td colSpan={4} className="p-4 text-right">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4">
                <FontAwesomeIcon icon={faCircleArrowLeft} className="mr-2" />
                上一步
            </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faCircleArrowRight} className="mr-2" />
                  下一步
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </fieldset>
  );
  const EvaluationStep = () => (
      <fieldset className="space-y-4">
      <div className="flex">
          <div className="w-5/12 border rounded p-4">
              <div className="font-bold mb-4">請填寫以下適應症評估量表</div>
              <table className="w-full">
                  <thead>
                      <tr className="border-b">
                          <th className="w-1/12 p-2">序</th>
                          <th className="w-7/12 p-2">量表名稱</th>
                          <th className="w-4/12 p-2">評估結果</th>
                      </tr>
                  </thead>
                  <tbody className="evaluation-list"></tbody>
              </table>
          </div>
          <div className="w-7/12 border rounded p-4 ml-4">
              <div id="evaluation-container" className="evaluation"></div>
          </div>
      </div>
      <div className="mt-4 flex justify-end">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4">
            <FontAwesomeIcon icon={faCircleArrowLeft} className="mr-2" />
              上一步
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FontAwesomeIcon icon={faCircleArrowRight} className="mr-2" />
              下一步
          </button>
      </div>
  </fieldset>
  );
  const AppoStep = () => (
    <fieldset className="space-y-4" data-api="/division/api/createNewAppo">
      <div className="flex">
          <div className="w-3/12 border rounded p-4">
              <div className="mb-4">請點擊醫師進行預約</div>
              <div className="flex flex-col gap-2"></div>
          </div>
          <div className="w-9/12 border rounded p-4 ml-4">
              <div id="wg-Container" className="w-full"></div>
          </div>
      </div>
      <div className="mt-4 flex justify-end">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4">
            <FontAwesomeIcon icon={faCircleArrowLeft} className="mr-2" />
              上一步
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
              <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
              預約
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <FontAwesomeIcon icon={faBan} className="mr-2" />
              暫不預約
          </button>
      </div>
    </fieldset>
  );

  return (
    <>
      <div className="mx-auto p-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <nav aria-label="Progress" className="mb-8">
            <ol role="list" className="overflow-hidden flex justify-between">
              {steps.map((item, index) => (
                <li key={index} className="relative flex items-center w-full" >
                  <div className={`absolute inset-0 flex items-center ${step === index + 1 ? '' : 'opacity-25'} `} aria-hidden="true">
                    {index > 0 && (
                      <div className="h-0.5 w-full bg-gray-200" />
                    )}
                  </div>
                  <div className={`relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 ${step === index + 1 ? 'border-blue-600' : 'border-gray-300'}`}>
                    <span className={`h-2.5 w-2.5 rounded-full ${step === index + 1 ? 'bg-blue-600' : 'bg-gray-300'}`} aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ol>
          </nav>
            <form  className="space-y-8">
            {renderStep()}
  
  
          <div className="flex justify-between">
            {step > 1 && (
              <button type="button" onClick={handlePrev} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Previous
              </button>
            )}
            {step < 4 ? (
              <button type="button" onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            ) : (
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >
                Submit
              </button>
            )}
            </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default FormPage;