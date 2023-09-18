import { useContractWrite, usePrepareContractWrite } from "wagmi";
import NFTJson from "../../../deployments/localhost/NFTworms.json";

interface NftMinterProps {
  receiver: string;
}

export default function NftMinter({ receiver }: NftMinterProps) {
  const { config, error } = usePrepareContractWrite({
    address: NFTJson.address,
    abi: NFTJson.abi,
    functionName: "safeMint",
    args: [receiver],
  });
  const { write } = useContractWrite(config);

  console.log(config, error);
  return (
    <button
      className="self-center px-8 py-4 mt-4 font-bold text-white bg-indigo-600 rounded-full disabled:opacity-75"
      onClick={() => write && write()}
    >
      Mint NFT
    </button>
  );
}