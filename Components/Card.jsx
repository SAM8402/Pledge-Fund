import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  // Function to calculate days left until the deadline
  const daysLeft = (deadline) => {
    const deadlineDate = new Date(deadline * 1000); // Convert seconds to milliseconds
    const now = new Date();
    const difference = deadlineDate - now;
    const remainingDays = Math.ceil(difference / (1000 * 3600 * 24));
    return remainingDays > 0 ? remainingDays : 0;
  };

  // Function to calculate the progress percentage
  const calculateProgress = (target, amountCollected) => {
    const targetFloat = parseFloat(target);
    const collectedFloat = parseFloat(amountCollected);
    if (targetFloat === 0) return 0;
    const progress = (collectedFloat / targetFloat) * 100;
    return progress > 100 ? 100 : progress;
  };

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="py-8 text-2xl font-bold">{title}</p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allcampaign?.map((campaign, i) => {
          const progress = calculateProgress(campaign.target, campaign.amountCollected);
          return (
            <div
              key={i}
              onClick={() => {
                setDonate(campaign);
                setOpenModel(true);
              }}
              className="cursor-pointer border rounded-lg overflow-hidden shadow-md transition-shadow duration-300 bg-white hover:shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                className="object-cover w-full h-64"
                alt="Campaign"
              />
              <div className="p-5">
                <p className="mb-2 text-sm font-semibold text-gray-600 uppercase">
                  Days Left: {daysLeft(campaign.deadline)}
                </p>
                <h2 className="mb-2 text-xl font-bold text-gray-800">{campaign.title}</h2>
                <p className="mb-4 text-gray-700">{campaign.description}</p>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {campaign.amountCollected} ETH raised of {campaign.target} ETH
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
