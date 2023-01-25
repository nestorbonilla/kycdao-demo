import {useCallback} from "react";

export default function Home() {

  const onOpenSDK = useCallback(async () => {
		const { KycDaoClient } = await import("@kycdao/widget")

		new KycDaoClient({
			parent: "#modalroot",
			config: {
				demoMode: false,
				enabledBlockchainNetworks: [
					"CeloAlfajores",
				],
				enabledVerificationTypes: ["KYC"],
				evmProvider: window.ethereum,
				baseUrl: "https://staging.kycdao.xyz",
			},
		}).open()
	}, [])

  return (
    <div className="flex flex-col items-center">
      <div className="h1 mb-4">Let's start your verification process!</div>
      <button
            type="button"
            className="inline-flex content-center place-items-center rounded-full border border-wood bg-prosperity py-5 px-10 text-md font-medium text-black hover:bg-snow"
            onClick={onOpenSDK}
        >KYC</button>
        <div id="modalroot" />
    </div>
  )
}
