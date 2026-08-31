---
id: 2026-08-31-august-megafarm-deepdive
title: "[테크 딥다이브] 하이퍼스케일러의 커스텀 AI 실리콘 전환과 풀스택 생태계 경제학: AWS 5억 달러 투자 이면의 인프라 아키텍처 분석"
date: 2026-08-31
time: "06:08"
category: Tech Deep Dive
status: published
summary: "글로벌 생성형 AI 워크로드의 확산과 초대형 파운데이션 모델의 매개변수 급증은 하이퍼스케일 데이터센터의 전력 밀도, 상호연결 대역폭, 자본적 지출(CAPEX) 구조를 근본적으로 재편하고 있습니다. 최근 AWS가 발표한 5억 달러(약 7,000억 원) 규모의 글로벌 AI 인재 양성 프로그램은 단순한 교육 지원을 넘어 커스텀 ASIC 생태계 락인을 위한 고도의 전략입니다."
labels:
  - 테크딥다이브
  - 커스텀실리콘
  - AI인프라
  - AWS
  - 데이터센터
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.85; color: #1e293b; max-width: 100%; word-break: keep-all; font-size: 16px;'>

<p style='font-size: 17px; color: #334155; margin-bottom: 24px;'>글로벌 생성형 AI 워크로드의 확산과 초대형 파운데이션 모델의 매개변수 급증은 하이퍼스케일 데이터센터의 전력 밀도, 상호연결 대역폭, 그리고 자본적 지출(CAPEX) 구조를 근본적으로 재편하고 있습니다. 최근 AWS가 발표한 5억 달러(약 7,000억 원) 규모의 글로벌 AI 인재 양성 및 '스튜던트 리워드(Student Rewards)' 프로그램은 단순한 기업 차원의 사회공헌이나 교육 지원을 넘어섭니다. 이는 차세대 소프트웨어 엔지니어와 연구진을 자사 클라우드 인프라와 독자 AI 가속기(Custom ASIC) 생태계에 조기 편입시키기 위한 고도의 전략적 포석입니다. 본 칼럼에서는 범용 GPU 의존도를 낮추고 자체 실리콘 기반의 전력 대 성능비 및 총소유비용(TCO)을 최적화하려는 빅테크의 아키텍처 혁신과 데이터센터 물리 인프라의 핵심 공학 쟁점을 심층 분석합니다.</p>

<h2 style='border-left: 5px solid #2563eb; padding-left: 12px; margin-top: 36px; margin-bottom: 18px; font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.4;'>🚀 서론: 기술 패러다임의 전환과 문제 제기</h2>

<p>지난 수년간 생성형 AI 인프라 시장은 엔비디아(NVIDIA)의 HGX 플랫폼과 CUDA 소프트웨어 스택을 중심으로 견고하게 수직 계열화되어 발전해 왔습니다. 그러나 단일 칩셋 공급업체에 대한 절대적인 의존은 주요 클라우드 서비스 제공자(CSP)들에게 심각한 공급망 조달 지연, 높은 독점 프리미엄에 따른 클라우드 마진 압박, 그리고 랙당 전력 밀도의 가파른 상승이라는 삼중고를 안겨주었습니다.</p>

<p>특히 차세대 Blackwell(B200/GB200 NVL72) 아키텍처에 이르러 단일 랙당 소비 전력이 100kW~130kW를 상회함에 따라, 기존의 항온항습기(CRAC/CRAH) 기반 공랭식(Air-Cooled) 데이터센터 인프라로는 칩셋의 열 설계를 감당하기 어려운 물리적 임계점에 도달했습니다. 이는 데이터센터 상면 설계부터 배전, 냉각, 상호연결 패브릭에 이르는 전면적인 아키텍처 재설계를 강제하고 있습니다.</p>

<div style='border-left: 4px solid #3b82f6; background-color: #f8fafc; padding: 16px 20px; margin: 20px 0; font-style: normal; color: #334155; border-radius: 0 8px 8px 0;'>
  <p style='margin: 0; font-weight: 700; color: #0f172a; font-size: 16px;'>💡 AI 인프라 경쟁 패러다임의 전환</p>
  <p style='margin: 8px 0 0 0; line-height: 1.7;'>AI 인프라 경쟁의 축은 이제 '단일 가속기의 이론상 최대 연산 성능(Peak TFLOPS)'이라는 단순 하드웨어 지표에서 벗어났습니다. 수만 개 칩셋이 결합된 대규모 클러스터 단위의 <strong>전력 대 성능비(Performance per Watt)</strong>, 노드 간 통신 병목을 없애는 <strong>커스텀 인터커넥트 패브릭(Custom Interconnect)</strong>, 그리고 계산 그래프 컴파일러 최적화를 통한 <strong>유효 토큰당 실질 처리 비용(Cost per Effective Token)</strong>의 복합 엔지니어링 방정식으로 이동하고 있습니다.</p>
</div>

<p>AWS, 구글, 마이크로소프트 등 하이퍼스케일러들은 자체 주문형 반도체(ASIC)를 설계하여 인프라 원가 구조를 주도적으로 통제하려 하고 있습니다. 그러나 맞춤형 실리콘 설계보다 훨씬 넘기 힘든 진입장벽은 바로 지난 15년간 구축된 개발자 소프트웨어 생태계의 락인(Lock-in)입니다. AWS의 대규모 인재 육성 투자는 하드웨어 실리콘과 소프트웨어 스택 전반의 주도권을 동시에 확보하려는 거시적 풀스택 로드맵의 핵심 고리입니다.</p>

<h2 style='border-left: 5px solid #2563eb; padding-left: 12px; margin-top: 36px; margin-bottom: 18px; font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.4;'>⚙️ 1장: 기술 아키텍처 및 메커니즘 심층 해설</h2>

<p>하이퍼스케일러가 자체 설계하는 맞춤형 AI 가속기(AWS Trainium2/Inferentia2, 구글 TPU v5p/v6e Trillium 등)는 범용 그래픽 처리 장치(GPGPU)와 근본적으로 다른 마이크로아키텍처 철학을 지닙니다. 범용 래스터라이제이션 및 3D 그래픽 파이프라인과 불필요한 레거시 회로를 과감히 제거하고, 행렬 곱셈 연산 유닛(Systolic Array 및 Tensor Engine), 고대역폭 메모리(HBM), 대용량 온칩 SRAM, 그리고 노드 간 전용 통신 패브릭에 실리콘 면적을 100% 집중 배치합니다.</p>

<h3 style='border-left: 3px solid #3b82f6; padding-left: 10px; margin-top: 26px; margin-bottom: 14px; font-size: 18px; font-weight: 600; color: #1e3a8a;'>1. 인터커넥트 토폴로지와 대규모 스케일아웃 메커니즘</h3>

<p>수천억 개 이상의 파라미터를 가진 프론티어 파운데이션 모델의 분산 학습 및 초저지연 서빙에서는 텐서 병렬화(Tensor Parallelism), 파이프라인 병렬화(Pipeline Parallelism), 전문가 혼합(MoE) 라우팅을 처리하는 노드 간 통신 대역폭과 지연시간(Latency)이 전체 시스템 성능의 최대 병목입니다.</p>

<p>엔비디아가 독자 규격인 NVLink 스위치 패브릭을 통해 랙 단위의 긴밀한 결합을 구현하는 반면, AWS는 안나푸르나 랩스(Annapurna Labs)의 전용 네트워킹 기술인 <strong>NeuronLink-v2</strong>와 <strong>EFA(Elastic Fabric Adapter)</strong>를 결합합니다. 이를 통해 16개의 Trainium2 가속기가 탑재된 UltraServer 내부에서 3차원 Non-blocking 링/올투올(All-to-All) 통신을 초저지연으로 직결하며, 최대 10만 개 가속기로 구성되는 EC2 UltraClusters 환경에서 통신 오버헤드를 극적으로 축소합니다.</p>

<div style='background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 24px 0;'>
  <div style='font-weight: 700; color: #1e293b; margin-bottom: 12px; font-size: 16px;'>📊 글로벌 인프라 AI 가속기 및 클러스터 아키텍처 종합 비교</div>
  <div style='overflow-x: auto;'>
    <table style='width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; margin-top: 8px;'>
      <thead style='background-color: #f1f5f9;'>
        <tr style='border-bottom: 2px solid #cbd5e1;'>
          <th style='padding: 12px 14px; color: #0f172a;'>비교 항목</th>
          <th style='padding: 12px 14px; color: #0f172a;'>NVIDIA Hopper / Blackwell (HGX)</th>
          <th style='padding: 12px 14px; color: #0f172a;'>AWS Trainium2 (UltraServer)</th>
          <th style='padding: 12px 14px; color: #0f172a;'>Google TPU v5p / v6e (Trillium)</th>
        </tr>
      </thead>
      <tbody>
        <tr style='border-bottom: 1px solid #e2e8f0;'>
          <td style='padding: 12px 14px; font-weight: 600;'>아키텍처 유형</td>
          <td style='padding: 12px 14px;'>범용 GPGPU + Tensor Core</td>
          <td style='padding: 12px 14px;'>도메인 특화 가속기 (Custom ASIC)</td>
          <td style='padding: 12px 14px;'>Systolic Array 기반 Matrix TPU Core</td>
        </tr>
        <tr style='border-bottom: 1px solid #e2e8f0; background-color: #fafafa;'>
          <td style='padding: 12px 14px; font-weight: 600;'>칩 간 인터커넥트</td>
          <td style='padding: 12px 14px;'>NVLink 4/5 (최대 1.8TB/s)</td>
          <td style='padding: 12px 14px;'>NeuronLink-v2 + EFA 커널 바이패스</td>
          <td style='padding: 12px 14px;'>Optical Circuit Switch (3D Torus)</td>
        </tr>
        <tr style='border-bottom: 1px solid #e2e8f0;'>
          <td style='padding: 12px 14px; font-weight: 600;'>단일 랙 전력 밀도</td>
          <td style='padding: 12px 14px;'>40kW ~ 120kW+ (액체냉각 강제)</td>
          <td style='padding: 12px 14px;'>35kW ~ 65kW (공랭/수랭 하이브리드)</td>
          <td style='padding: 12px 14px;'>40kW ~ 80kW (Direct Liquid Cooling)</td>
        </tr>
        <tr style='border-bottom: 1px solid #e2e8f0; background-color: #fafafa;'>
          <td style='padding: 12px 14px; font-weight: 600;'>소프트웨어 스택</td>
          <td style='padding: 12px 14px;'>CUDA, TensorRT, Triton</td>
          <td style='padding: 12px 14px;'>AWS Neuron SDK, PyTorch XLA</td>
          <td style='padding: 12px 14px;'>XLA 컴파일러, JAX, TensorFlow</td>
        </tr>
        <tr style='border-bottom: 1px solid #e2e8f0;'>
          <td style='padding: 12px 14px; font-weight: 600;'>냉각 인프라 요구조건</td>
          <td style='padding: 12px 14px;'>D2C 액체냉각, CDU 2차 배관 필수</td>
          <td style='padding: 12px 14px;'>표준 고밀도 랙 및 맞춤형 수랭 대응</td>
          <td style='padding: 12px 14px;'>구글 전용 맞춤형 수랭 루프 표준화</td>
        </tr>
        <tr style='border-bottom: 1px solid #e2e8f0; background-color: #fafafa;'>
          <td style='padding: 12px 14px; font-weight: 600;'>공급망 및 원가 구조</td>
          <td style='padding: 12px 14px;'>단일 벤더 의존, 높은 칩셋 마진율</td>
          <td style='padding: 12px 14px;'>자체 설계(팹리스), BOM 원가 통제 탁월</td>
          <td style='padding: 12px 14px;'>자체 설계, GCP 내부 파운데이션 모델 전용</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3 style='border-left: 3px solid #3b82f6; padding-left: 10px; margin-top: 26px; margin-bottom: 14px; font-size: 18px; font-weight: 600; color: #1e3a8a;'>2. 컴파일러 계층과 소프트웨어 추상화의 정밀성</h3>

<p>하드웨어 가속기의 성능을 100% 이끌어내는 핵심 열쇠는 컴파일러에 있습니다. AWS의 <strong>Neuron SDK</strong>나 구글의 <strong>XLA(Accelerated Linear Algebra)</strong>는 PyTorch, JAX 같은 고수준 프레임워크의 연산 그래프를 분석하여 하드웨어 명령어 집합으로 최적 컴파일하는 그래프 컴파일러입니다.</p>

<p>이 컴파일러 엔진이 연속된 텐서 연산을 단일 커널로 묶는 커널 융합(Kernel Fusion), SRAM과 HBM 간의 메모리 접근 패턴 최적화, 그리고 연산 파이프라인의 유휴 시간(Bubble)을 얼마나 최소화하느냐에 따라 실제 하드웨어 가동률(MFU, Model FLOPs Utilization)이 결정됩니다. 컴파일러의 성숙도가 뒷받침되지 않으면 이론상 TFLOPS가 아무리 높아도 실질 처리량은 급격히 저하됩니다.</p>

<h3 style='border-left: 3px solid #3b82f6; padding-left: 10px; margin-top: 26px; margin-bottom: 14px; font-size: 18px; font-weight: 600; color: #1e3a8a;'>3. 메모리 계층 구조와 토큰 서빙 레이턴시 최적화</h3>

<p>대규모 언어 모델의 실시간 추론 워크로드는 연산 집약적(Compute-Bound) 단계인 프롬프트 처리와 메모리 대역폭 집약적(Memory-Bound) 단계인 토큰 생성 단계로 나뉩니다. 모델의 파라미터와 KV 캐시가 거대해질수록 HBM의 대역폭과 용량이 첫 번째 토큰 출력 시간(Time-to-First-Token)과 후속 토큰 간 지연시간(Inter-Token Latency)을 지배합니다.</p>

<p>Trainium2와 Inferentia2는 대용량 HBM3e 메모리와 함께 칩 내부에 최적화된 온다이 SRAM 캐시 계층을 배치하여 빈번한 행렬 가중치 로딩에 따른 전력 소모를 억제하고, 배치 크기(Batch Size)를 유연하게 확장할 수 있는 아키텍처적 유연성을 제공합니다.</p>

<h2 style='border-left: 5px solid #2563eb; padding-left: 12px; margin-top: 36px; margin-bottom: 18px; font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.4;'>🏢 2장: 빅테크(AWS, MS, Google, NVIDIA)의 실제 투자 및 사업 추진 전략</h2>

<p>현재 글로벌 빅테크 4사의 인프라 전략은 엔비디아 범용 가속기 클러스터의 공격적 확충과 독자 커스텀 실리콘 라인업의 내재화를 동시에 추진하는 투트랙(Two-Track) 모델로 뚜렷하게 수렴하고 있습니다.</p>

<ul style='padding-left: 20px; margin: 18px 0;'>
  <li style='margin-bottom: 14px;'><strong>AWS:</strong> 생성형 AI 프론티어 기업인 앤스로픽(Anthropic)에 수십억 달러를 투자하며 차세대 모델(Claude 시리즈)의 핵심 학습 및 서빙 인프라로 Trainium2 클러스터 도입을 공식화했습니다. 이와 동시에 10만 개 가속기 규모의 Project Rainier 클러스터를 구축하고 있으며, 이번 5억 달러 규모의 글로벌 인재 육성 프로그램을 통해 대학 및 연구진이 초기 개발 단계부터 AWS Bedrock과 Neuron SDK 환경을 표준 도구로 채택하도록 유도하고 있습니다.</li>
  <li style='margin-bottom: 14px;'><strong>Microsoft:</strong> Azure 인프라 내에서 OpenAI 전용 슈퍼컴퓨팅 클러스터를 대규모로 운영하는 동시에, 자체 개발한 AI 가속기 'Maia 100'(5nm 공정, 맞춤형 수랭 플레이트 적용)과 범용 ARM CPU인 'Cobalt 100'을 점진적으로 배치하여 인프라 단위당 에너지 비용과 원가 구조 절감에 돌입했습니다.</li>
  <li style='margin-bottom: 14px;'><strong>Google:</strong> 자체 파운데이션 모델인 제미나이(Gemini) 제품군의 사전 학습(Pre-training)부터 실시간 서비스까지 전 과정을 100% 자체 TPU(v4, v5p, 6세대 Trillium) 인프라 위에서 구동하고 있습니다. 광회로 스위치(OCS)를 통한 동적 토폴로지 재구성 기술을 결합하여 외산 GPU 의존도를 실질적으로 극복한 대표적 수직 통합 사례입니다.</li>
  <li style='margin-bottom: 14px;'><strong>NVIDIA:</strong> 칩 단품 판매를 넘어 GB200 NVL72와 같은 '랙 스케일 완전체 시스템'을 표준화하고 있습니다. 전력 버스바, 냉각 배관 매니폴드, 스위치 패브릭을 일체형으로 공급함으로써, 데이터센터 인프라 규격 자체를 자사 중심으로 고정시키려는 강력한 방어 전략을 구사하고 있습니다.</li>
</ul>

<h2 style='border-left: 5px solid #2563eb; padding-left: 12px; margin-top: 36px; margin-bottom: 18px; font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.4;'>⚖️ 3장: 경제성(TCO), 전력망 연계, 규제 및 현실적 과제</h2>

<p>자체 가속기 도입이 장밋빛 수익성만을 보장하는 것은 아닙니다. 데이터센터 물리 엔지니어링과 재무적 총소유비용(TCO) 관점에서 해결해야 할 중대한 공학적, 경제적 제약 요인이 상존합니다.</p>

<h3 style='border-left: 3px solid #3b82f6; padding-left: 10px; margin-top: 26px; margin-bottom: 14px; font-size: 18px; font-weight: 600; color: #1e3a8a;'>1. 총소유비용(TCO)과 실질 경제성의 역학 관계</h3>

<p>AI 인프라의 TCO는 단순히 칩셋의 제조원가(BOM)나 초기 구매 비용으로만 평가할 수 없습니다. 랙당 초기 설비투자비(CAPEX)의 감가상각 기간, 데이터센터 전력효율지수(PUE)가 반영된 연간 전력 운영비(OPEX), 액체 냉각 설비 유지보수비, 그리고 소프트웨어 컴파일러 최적화를 통해 실제로 달성되는 <strong>연간 유효 토큰 처리량(Effective Token Throughput)</strong>이 유기적으로 결합됩니다.</p>

<p>만약 컴파일러의 비효율로 인해 연산 가동률(MFU)이 저하되거나 모델 재학습 시 소프트웨어 디버깅 병목이 발생하면, 칩셋 가격이 아무리 저렴하더라도 유효 토큰당 실질 처리 비용은 엔비디아 생태계보다 오히려 상승할 수 있습니다. 즉, 하드웨어 단가 절감분보다 소프트웨어 튜닝 및 인프라 운영 비용이 더 커지는 역전 현상이 발생할 수 있는 것입니다.</p>

<h3 style='border-left: 3px solid #3b82f6; padding-left: 10px; margin-top: 26px; margin-bottom: 14px; font-size: 18px; font-weight: 600; color: #1e3a8a;'>2. 데이터센터 물리 인프라와 고밀도 열 관리의 공학적 제약</h3>

<p>초고밀도 AI 클러스터 구축은 데이터센터 전력 공급 및 냉각 인프라에 막대한 하중을 가합니다. 랙당 50kW~100kW를 초과하는 고집적 부하는 공기 순환만으로는 칩 표면의 접합부 온도(Junction Temperature)를 안전 한계치 이하로 유지할 수 없습니다.</p>

<p>따라서 칩 표면에 냉각수를 직접 순환시키는 <strong>Direct-to-Chip(D2C) 액체 냉각</strong> 또는 침전 냉각(Immersion Cooling) 시스템의 도입이 필수적입니다. 이는 냉각 분배 장치(CDU), 2차 배관 루프(Secondary Fluid Loop), 스테인리스 스틸 매니폴드, 실시간 미세 누수 감지 센서 등의 추가 설비 투자(CAPEX)를 수반하며, 냉각수의 수질 관리와 배관 부식 방지 등 운영 복잡성을 크게 증대시킵니다.</p>

<h3 style='border-left: 3px solid #3b82f6; padding-left: 10px; margin-top: 26px; margin-bottom: 14px; font-size: 18px; font-weight: 600; color: #1e3a8a;'>3. 전력망(Grid) 인입 병목과 발전원 직결(SMR/PPA) 리스크</h3>

<p>기가와트(GW)급 차세대 AI 데이터센터 클러스터의 등장은 북미(PJM, ERCOT), 유럽, 아시아태평양 등 주요 거점 지역의 송배전망 용량 포화 사태를 초래하고 있습니다. 변전소 증설과 계통 연계(Interconnection Queue) 승인에만 통상 5~7년이 소요됨에 따라, 하이퍼스케일러들은 전력 확보를 위해 발전원 직결 전략을 공격적으로 추진하고 있습니다.</p>

<p>소형 모듈 원자로(SMR) 개발사와의 선제적 전력구매계약(PPA) 체결, 기존 대형 원자력 발전소 인근 부지 직접 매입(Behind-the-Meter 직결) 등이 대표적입니다. 그러나 원자력 및 대규모 에너지 인프라는 안전 인허가 규제, 고순도 저농축 우라늄(HALEU) 연료 공급망, 지자체 수용성 등 장기적인 프로젝트 리스크를 내포하고 있습니다.</p>

<h2 style='border-left: 5px solid #2563eb; padding-left: 12px; margin-top: 36px; margin-bottom: 18px; font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.4;'>💡 클라우드 AI 인프라 경제학 관점의 전략 분석</h2>

<p>향후 5년간 글로벌 AI 데이터센터 시장은 하드웨어 단품 스펙 경쟁을 넘어 <strong>'실리콘-인프라-소프트웨어의 수직 통합과 운영 효율성'</strong>을 달성한 소수 빅테크 중심으로 재편될 것입니다. 이번 분석을 통해 도출되는 핵심 시사점은 다음과 같습니다.</p>

<ol style='padding-left: 20px; margin: 18px 0;'>
  <li style='margin-bottom: 16px;'><strong>생태계 투자의 본질은 하드웨어 TCO 회수 기간의 단축:</strong> 개발자가 특정 프레임워크나 칩셋의 SDK에 익숙해질수록 다른 플랫폼으로의 이전 비용(Switching Cost)이 기하급수적으로 커집니다. AWS의 5억 달러 인재 육성 투자는 전 세계 학생과 연구진이 자연스럽게 Trainium 및 Bedrock 환경을 기본 도구로 학습하게 함으로써, 장기적으로 자사 커스텀 실리콘의 가동률을 극대화하고 R&D 감가상각 기간을 단축시키는 고수익 생태계 선점 전략입니다.</li>
  <li style='margin-bottom: 16px;'><strong>차세대 데이터센터 인프라의 액체 냉각 표준화 가속:</strong> 향후 구축될 AI 전용 데이터센터는 수랭식 냉각 인프라를 기본 전제로 설계되어야 합니다. 모듈형 퀵 디스커넥트(QD) 배관, 무중단 CDU 유지보수 프로토콜, 냉각수 화학적 수질 관리는 클라우드 서비스 가용성(SLA)과 직결되는 핵심 공학 역량이 될 것입니다.</li>
  <li style='margin-bottom: 16px;'><strong>추론(Inference) 시장 중심의 ASIC 우위 현실화:</strong> 학습(Training) 시장에서는 CUDA의 방대한 오픈소스 생태계로 인해 엔비디아의 지배력이 상당 기간 지속될 것이나, 운영 비용(OpEx)과 전력 효율이 절대적 지표인 대규모 서빙 및 추론 시장에서는 Inferentia2, TPU v6e와 같은 비용 특화 ASIC이 점유율을 급속히 확대하며 시장을 양분할 것입니다.</li>
</ol>

<p style='margin-top: 28px; font-size: 16px; color: #475569; background-color: #f1f5f9; padding: 16px 20px; border-radius: 8px;'>결국 미래 AI 인프라의 최종 경쟁력은 단일 칩의 연산 속도가 아니라, <strong>실리콘 설계 ➔ 컴파일러 최적화 ➔ 데이터센터 물리 인프라 ➔ 개발자 소프트웨어 생태계</strong>로 이어지는 4단계 가치사슬을 얼마나 빈틈없이 통합하느냐에 달려 있습니다.</p>

</div>