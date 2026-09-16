---
id: 2026-09-17-daily-infraops-briefing
title: "[2026.09.17] 오늘의 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑"
date: 2026-09-17
time: "05:54"
category: Daily Briefing
status: published
summary: "2026년 9월 17일, 글로벌 클라우드 및 데이터센터 인프라 지형은 지정학적 물리적 충격과 차세대 초고집적 AI 하드웨어의 전력·냉각 한계 극복이라는 중대한 전환점에 직면했습니다. 중동 지역의 군사적 분쟁으로 인한 하이퍼스케일러 데이터센터 시설 피격 및 데이터 영구 손실 사태는 클라우드 복원력의 근본적 설계를 재검토하게 만들고 있으며, 엔비디아와 코어위브"
labels:
  - AWS
  - 엔비디아
  - 클라우드
  - 데이터센터
  - AI인프라
  - 멀티클라우드
  - 인프라동향
---

<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: #1E293B; max-width: 840px; margin: 0 auto; padding: 20px 0;'>

<p style='font-size: 16px; margin-bottom: 24px;'>2026년 9월 17일, 글로벌 클라우드 및 데이터센터 인프라 지형은 지정학적 물리적 충격과 차세대 초고집적 AI 하드웨어의 전력·냉각 한계 극복이라는 중대한 전환점에 직면했습니다. 중동 지역의 군사적 분쟁으로 인한 하이퍼스케일러 데이터센터 시설 피격 및 데이터 영구 손실 사태는 클라우드 복원력의 근본적 설계를 재검토하게 만들고 있으며, 엔비디아와 코어위브(CoreWeave)를 중심으로 전개되는 베라 루빈(Vera Rubin) NVL72 구축과 전력망 직접 제어 기술은 인프라 운영의 지평을 설비 계층에서 국가 전력망과의 실시간 인터랙션으로 확장하고 있습니다. 금일 수집된 핵심 기사들을 바탕으로 인프라 아키텍트와 기술 의사결정권자가 주목해야 할 심층 동향을 종합 정리합니다.</p>

<div style='background-color: #F8FAFC; border-left: 5px solid #2563EB; padding: 20px 24px; border-radius: 6px; margin-bottom: 36px;'>
  <h3 style='margin-top: 0; margin-bottom: 14px; font-size: 18px; color: #1E40AF; display: flex; align-items: center;'>
    📌 오늘의 3대 핵심 관전 포인트 (Key Highlights)
  </h3>
  <ul style='margin: 0; padding-left: 20px; font-size: 15px; color: #334155;'>
    <li style='margin-bottom: 10px;'>
      <strong>지정학적 물리 타격과 클라우드 영구 결손:</strong> AWS 중동 걸프 데이터센터 시설이 미사일 공격으로 물리적 손상을 입으며 일부 가용영역(AZ)의 데이터가 영구 복구 불능 상태에 빠졌습니다. 이는 단일 리전 다중 AZ 체계의 명백한 한계를 드러내며 다중 리전(Multi-Region) 격리 및 크로스 리전 DR 아키텍처의 필수성을 입증하고 있습니다.
    </li>
    <li style='margin-bottom: 10px;'>
      <strong>베라 루빈 NVL72와 랙당 130kW 냉각 병목:</strong> 엔비디아 차세대 베라 루빈 NVL72 클러스터 도입 과정에서 랙당 130~140kW에 달하는 전력 밀도로 인해 100% 직접 액체 냉각(DLC)과 고정밀 CDU 유량 제어, 랙 배선 간섭 극복이 차세대 AI 데이터센터 현장의 핵심 당면 과제로 부상했습니다.
    </li>
    <li>
      <strong>전력망 직접 제어와 멀티클라우드 연합:</strong> 엔비디아와 구글, Emerald AI가 전력 과도현상(dI/dt)에 대응해 전력망 상태에 따라 연산 부하를 제어하는 동맹을 발족한 한편, 세일즈포스는 AWS 및 GCP와 제로 카피(Zero-Copy) 동맹을 체결하며 멀티클라우드 간 데이터 사일로를 해체하고 실시간 AI 에이전트 인프라를 구축하고 있습니다.
    </li>
  </ul>
</div>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-top: 40px; margin-bottom: 20px;'>
  1. 지정학적 물리 충격과 클라우드의 한계: AWS 걸프 리전 피격이 던진 다중 리전 DR의 필연성
</h2>

<p>클라우드 컴퓨팅 도입 이래 수많은 기업들은 가용영역(Availability Zone, AZ)의 물리적 분리를 통해 화재, 정전, 국소적 침수 등의 재난으로부터 데이터가 안전하게 보호된다는 전제를 신뢰해 왔습니다. 그러나 최근 중동 걸프 지역에서 발생한 군사적 타격으로 AWS의 데이터센터 물리 시설이 직접 손상되며, 일부 고객 데이터가 영구적으로 복구 불가능하다는 공식 통보가 전해졌습니다. 이는 전통적인 데이터센터 가용성 모델과 클라우드 공유 책임 모델(Shared Responsibility Model)에 중대한 경종을 울리고 있습니다.</p>

<blockquote style='background-color: #FEF2F2; border-left: 4px solid #EF4444; margin: 20px 0; padding: 14px 18px; font-size: 14px; color: #991B1B;'>
  <strong>외신 및 업계 보고 핵심:</strong> 월스트리트저널(WSJ)과 주요 외신에 따르면, AWS는 이란의 공격으로 피해를 입은 걸프만 시설 내 일부 스토리지 클러스터의 데이터 블록이 물리적으로 파손되어 완전한 데이터 복원이 불가능함을 고객사들에게 통보했습니다. 이는 자연재해나 통신 단절을 넘어 물리적 파쇄에 노출된 하이퍼스케일러 인프라의 취약성을 여실히 보여줍니다.
</blockquote>

<p>기술적 관점에서 하이퍼스케일러의 단일 리전은 통상 지연 시간 1~2밀리초(ms) 이내로 연결된 3개 이상의 독립 가용영역으로 구성됩니다. 데이터는 S3나 분산 파일시스템을 통해 AZ 간 동기식 또는 준동기식으로 복제되도록 설계되어 있습니다. 그러나 이번 사태에서 드러난 핵심 취약점은 국지적 군사 충돌이나 광역 공습이 특정 지리적 권역 전체의 유틸리티 전력망, 백본 광케이블망을 동시에 마비시키거나, 물리적 스토리지 랙을 직접 타격할 경우 단일 리전 내부의 복제 체계가 연쇄적으로 무력화될 수 있다는 점입니다.</p>

<p>클라우드 서비스 제공업체(CSP)가 제공하는 기본 인프라 가용성 보장(SLA)은 물리적 하드웨어의 가동을 목표로 할 뿐, 데이터 무결성과 최종 복구(DR)의 책임은 여전히 고객에게 귀속됩니다. 상당수 기업들이 네트워크 송출 비용(Egress Cost)과 추가 스토리지 라이선스 비용을 절감하기 위해 500km 이상 떨어진 원격 리전으로의 크로스 리전(Cross-Region) 비동기 복제를 배제하고 단일 리전 내 다중 AZ 구성에만 의존해 왔습니다. 이번 사건은 미션 크리티컬 워크로드에 있어 다음과 같은 아키텍처 재편이 불가피함을 시사합니다.</p>

<ul style='padding-left: 20px; margin-bottom: 24px;'>
  <li><strong>지리적 격리 거리의 재정의:</strong> 동일 국가나 동일 분쟁 권역 내에 위치한 리전 간 복제는 지정학적 리스크를 상쇄할 수 없습니다. 최소 500km 이상 물리적으로 격리되고 지정학적 관할권이 분리된 안전 권역 리전으로의 데이터 비동기 미러링이 필수적입니다.</li>
  <li><strong>불변 스냅샷(Immutable Snapshot) 및 에어갭(Air-Gapped) 백업:</strong> 물리적 시설 파손이나 사이버 전자전 결합 사태에 대비하여 오브젝트 잠금(Object Lock) 기능이 적용된 읽기 전용 스냅샷을 원격 제3의 클라우드 또는 온프레미스 인프라에 분산 보관해야 합니다.</li>
  <li><strong>RTO/RPO 지표의 현실적 재평가:</strong> 데이터 유실 허용 시점(RPO)을 0으로 유지하는 완전 동기식 복제는 지연 시간 문제로 다중 리전 간 적용이 어렵습니다. 따라서 수 분에서 수 시간 단위의 RPO를 감수하더라도 서비스 연속성을 보장할 수 있는 페일오버(Failover) 오케스트레이션 자동화가 엔지니어링의 핵심 과제로 대두되었습니다.</li>
</ul>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-top: 40px; margin-bottom: 20px;'>
  2. 초고집적 가속 랙의 물리적 한계: 엔비디아 베라 루빈 NVL72와 CoreWeave의 130kW+ 냉각 엔지니어링
</h2>

<p>인공지능 모델의 파라미터가 수조 단위로 급증함에 따라 가속 컴퓨팅 인프라는 단일 서버 단위에서 '랙 스케일 컴퓨터(Rack-Scale Computer)' 체제로 완전히 전환되었습니다. 엔비디아가 베라 루빈(Vera Rubin) 아키텍처와 그록 3(Grok 3) LPX 가속기 지원을 본격화한 가운데, 글로벌 AI 특화 클라우드 선도 기업인 코어위브(CoreWeave)는 멀티 랙 기반의 베라 루빈 NVL72 클러스터를 가동하기 위해 요구되는 극한의 물리적 인프라 요건을 상세히 공개했습니다.</p>

<p>기존 블랙웰(Blackwell) 세대 NVL72가 랙당 약 120kW의 전력을 소모했던 것에 비해, 차세대 HBM4 메모리와 고대역폭 인터커넥트가 집적된 베라 루빈 기반 랙은 단위 랙당 소비 전력이 130kW에서 최대 140kW 수준에 육박합니다. 이는 기존의 통상적인 공랭식 룸 에어컨(CRAC) 시스템으로는 열 제거가 완전히 불가능한 수치이며, 100% 직접 액체 냉각(Direct-to-Chip Liquid Cooling, DLC)을 기반으로 한 냉각 인프라의 전면 개편을 의미합니다.</p>

<div style='background-color: #F1F5F9; padding: 18px 22px; border-radius: 8px; margin: 20px 0;'>
  <h4 style='margin-top: 0; margin-bottom: 10px; font-size: 16px; color: #0F172A;'>🛠️ 베라 루빈 NVL72 멀티 랙 클러스터 현장 엔지니어링 핵심 쟁점</h4>
  <ul style='margin: 0; padding-left: 20px; font-size: 14.5px; color: #334155;'>
    <li style='margin-bottom: 8px;'><strong>냉각 분배 장치(CDU)와 2차 루프 압력 밸런싱:</strong> 랙 내부로 유입되는 냉각수의 공급 온도(약 25°C~32°C) 및 유량을 미세 제어해야 합니다. 72개의 GPU 콜드플레이트(Cold Plate) 전반에 걸쳐 균일한 유압이 유지되지 않을 경우, 국소적 열 축적으로 인해 GPU 연산 주파수가 저하(Throttling)되며 클러스터 전체의 집체 통신(All-Reduce) 동기화 지연이 발생합니다.</li>
    <li style='margin-bottom: 8px;'><strong>NVLink 구리선(Copper) 하네스와 배선 병목:</strong> 랙 내부 72개 GPU 간 통신을 담당하는 수천 가닥의 NVLink 패시브 구리 케이블은 무게만 수백 킬로그램에 달합니다. 랙 후면의 고밀도 케이블 트레이는 냉각 배관과의 공간 간섭을 유발하며, 유지보수 시 모듈 탈착을 극도로 어렵게 만드는 기계적 제약 요인으로 작용합니다.</li>
    <li><strong>누수 감지 시스템(LDS)과 무점적 퀵 디스커넥트(QD):</strong> 초고압 냉각수가 순환하는 환경에서 한 방울의 냉각수 누수도 고가 하드웨어의 영구 손상으로 이어집니다. 이에 따라 랙 내부 광섬유 기반 누수 센서와 밸브 탈착 시 냉각수 누출이 제로에 수렴하는 무점적(Non-Drip) 퀵 디스커넥트 커플링 도입이 필수 규격화되고 있습니다.</li>
  </ul>
</div>

<p>코어위브의 운영 분석은 하이퍼스케일 AI 팩토리를 구축함에 있어 단순히 가속기 칩을 확보하는 것을 넘어, 냉각수 루프의 화학적 순도 관리, 열교환기(TCS) 효율, 배전 PDU의 고전압화(415V/480V 3상 직결)가 종합적으로 맞물려야만 대규모 멀티 랙 클러스터의 실질적인 연산 가동률(MFU, Model Flops Utilization)을 유지할 수 있음을 입증하고 있습니다.</p>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-top: 40px; margin-bottom: 20px;'>
  3. AI 연산과 전력망의 직접 결합: 전력망 직접 제어 기술과 Emerald AI·구글·엔비디아 유연성 연합
</h2>

<p>AI 인프라의 확장이 가속화되면서 전 세계 데이터센터 업계가 직면한 가장 거대한 장벽은 컴퓨팅 성능의 부족이 아닌 '물리적 전력 공급(Power Availability)'의 제약입니다. 신규 변전소와 원자력·가스 발전 설비를 증설하는 데 최소 5년에서 10년의 인허가 및 공사 기간이 소요되는 상황에서, 하이퍼스케일러들은 주어진 전력망 용량 내에서 가동률을 극대화하기 위한 '소프트웨어 정의 전력 제어'로 패러다임을 급격히 전환하고 있습니다.</p>

<p>테크월드 보도에 따르면 엔비디아는 AI 데이터센터가 전력망(Grid)으로부터 전력을 일방적으로 공급받는 수동적 소비자에 머무르지 않고, 전력망의 실시간 주파수와 부하 상태를 감지하여 컴퓨팅 클러스터의 전력 소모를 직접 제어하는 시스템을 개발하고 있습니다. 거대 언어 모델(LLM) 학습 환경에서는 모든 GPU가 동시에 대규모 행렬 연산을 수행하는 순간과, 연산 완료 후 다음 배치 데이터를 대기하거나 체크포인트를 디스크에 기록하는 순간 사이에 수십 밀리초(ms) 단위로 수십 메가와트(MW)의 부하 변동(Load Transient, dI/dt)이 발생합니다. 이러한 급격한 부하 변동은 유틸리티 전력망의 주파수를 교란하고 변압기에 치명적인 전기적 스트레스를 유발합니다.</p>

<p>이러한 전력망 병목을 돌파하기 위해 Emerald AI, 구글 클라우드, 엔비디아는 <strong>'유연한 AI 데이터센터 연합(Alliance for Flexible AI Data Centers)'</strong>을 공식 출범시켰습니다. 본 연합이 추진하는 핵심 아키텍처는 전력망 규제 기관(미국 FERC, PJM 등) 및 전력 발전 사업자와 데이터센터 오케스트레이터를 직접 연결하는 지능형 전력 유연성(Flexibility) 메커니즘입니다.</p>

<ul style='padding-left: 20px; margin-bottom: 24px;'>
  <li><strong>동적 워크로드 부하 이전(Workload Shifting & Curtailment):</strong> 태양광이나 풍력 등 재생에너지 공급이 급감하거나 도심 전력 피크가 발생하는 시간대에, 클러스터 스케줄러(Kubernetes, Slurm)가 즉각 실시간 추론과 같은 지연 민감형 작업의 성능은 유지하되 대규모 배치 학습 작업의 클럭 주파수를 낮추거나 일시 지연(Throttling)합니다.</li>
  <li><strong>BESS(배터리 에너지 저장 장치)와의 밀결합 제어:</strong> 데이터센터 부지 내 설치된 메가와트시(MWh)급 배터리 시스템이 전력 부하 변동의 완충재 역할을 수행합니다. 연산 부하가 급증할 때 배터리가 밀리초 단위로 방전하여 전력망으로부터의 급격한 전력 인출을 억제하고, 유틸리티망의 안정성을 유지합니다.</li>
  <li><strong>탄소 및 전력 비용 인지형 분산 스케줄링:</strong> 구글과 엔비디아의 글로벌 네트워크 백본을 활용하여, 전력 공급 여력이 충분하고 단가가 저렴한 지리적 권역의 데이터센터로 AI 체크포인트를 전송하여 작업을 이관하는 광역 워크로드 마이그레이션 체계를 구축합니다.</li>
</ul>

<p>이러한 유연성 연합의 기술 표준화는 전력망 공급자에게 데이터센터를 단순한 부하 유발자가 아닌 전력망 안정화에 기여하는 '수요 반응(Demand Response, DR)' 자원으로 인식되도록 함으로써, 지자체 인허가 지연을 해소하고 가용 전력 용량을 추가로 확보하는 전략적 전기를 마련하고 있습니다.</p>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-top: 40px; margin-bottom: 20px;'>
  4. 데이터 사일로 해체와 실시간 에이전트 백본: 세일즈포스-AWS-GCP 멀티클라우드 제로 카피 연합
</h2>

<p>AI 인프라 계층이 하드웨어와 전력 문제를 해결하는 동안, 엔터프라이즈 소프트웨어 계층에서는 멀티클라우드 환경에 흩어진 방대한 기업 데이터를 어떻게 효율적으로 모델과 연결할 것인가가 최대 화두로 떠올랐습니다. 세일즈포스가 AWS 및 구글 클라우드와의 파트너십을 전격 확대하며 데이터 경계를 허무는 '제로 카피(Zero-Copy)' 아키텍처를 발표한 것은 이러한 구조적 병목을 해결하기 위한 결정적 전환점으로 분석됩니다.</p>

<p>기존 기업 환경에서 서로 다른 클라우드에 적재된 데이터를 결합하기 위해서는 복잡한 전통적 ETL(추출·변환·적재) 파이프라인을 구축해야 했습니다. 이는 데이터 파이프라인의 잦은 장애, 수 테라바이트(TB) 데이터 복제에 수반되는 수십 분 이상의 지연 시간, 그리고 무엇보다 CSP 간 데이터 전송 시 발생하는 막대한 네트워크 송출 비용(Egress Fee)이라는 삼중고를 야기했습니다. 또한 복제된 데이터 사본이 늘어날수록 개인정보 보호 규정(GDPR, CCPA) 준수와 데이터 거버넌스 관리가 기하급수적으로 어려워지는 문제가 있었습니다.</p>

<div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; margin: 20px 0;'>
  <h4 style='margin-top: 0; margin-bottom: 12px; font-size: 16px; color: #1E293B;'>🔗 세일즈포스-AWS-GCP 제로 카피 연동의 기술 메커니즘</h4>
  <p style='font-size: 14.5px; color: #475569; margin-bottom: 12px;'>
    세일즈포스의 Data Cloud는 개방형 테이블 포맷인 <strong>아파치 아이스버그(Apache Iceberg)</strong> 및 델타 레이크(Delta Lake)를 표준으로 채택했습니다. 이를 통해 데이터 자체를 물리적으로 이동하거나 복사하지 않고, AWS Amazon Redshift와 구글 BigQuery에 저장된 데이터에 메타데이터 포인터만을 연결하여 실시간으로 조회하는 <em>양방향 연합 쿼리(Federated Query)</em>를 수행합니다.
  </p>
  <ul style='margin: 0; padding-left: 20px; font-size: 14.5px; color: #475569;'>
    <li style='margin-bottom: 6px;'><strong>네트워크 송출 비용의 최소화:</strong> 원본 데이터의 대규모 벌크 이동을 제거함으로써 멀티클라우드 운영 TCO 중 가장 큰 비중을 차지하던 데이터 전송 요금을 대폭 절감합니다.</li>
    <li style='margin-bottom: 6px;'><strong>실시간 자율 에이전트 구동:</strong> 세일즈포스의 Agentforce와 같은 AI 자율 에이전트가 고객 응대나 트랜잭션 처리 시, AWS나 GCP의 데이터 웨어하우스에 저장된 실시간 물류 재고, 결제 내역, 로그 데이터를 밀리초(ms) 지연 시간 내에 즉각 참조할 수 있습니다.</li>
    <li><strong>단일 거버넌스 및 보안 정책 유지:</strong> 데이터가 원천 저장소에 머무르기 때문에 각 클라우드 계정에 설정된 IAM(Identity and Access Management) 및 암호화 정책이 그대로 유지되어 데이터 유출 리스크를 원천 차단합니다.</li>
  </ul>
</div>

<p>이번 3자 연합은 엔터프라이즈 AI의 패러다임이 '단일 클라우드로의 데이터 집중'에서 '분산된 멀티클라우드 데이터 패브릭'으로 완전히 이동했음을 의미합니다. 클라우드 아키텍트들은 이제 데이터 파이프라인 관리의 기술 부채에서 벗어나, 표준화된 데이터 가상화 레이어를 기반으로 기업 고유의 비즈니스 로직과 실시간 에이전트 워크플로우를 최적화하는 데 집중할 수 있게 되었습니다.</p>

<h2 style='font-size: 20px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-top: 44px; margin-bottom: 20px;'>
  🔗 오늘의 주요 큐레이션 링크 (Curated Sources)
</h2>

<ul style='list-style-type: none; padding-left: 0; font-size: 14.5px;'>
  <li style='margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dotted #CBD5E1;'>
    <span style='display: inline-block; background-color: #E0E7FF; color: #3730A3; font-weight: bold; font-size: 12px; padding: 2px 8px; border-radius: 4px; margin-right: 8px;'>해외 | WSJ</span>
    <a href='https://news.google.com/rss/articles/CBMivAFBVV95cUxQYWNRTXk3NkNPa2RaTGhZNnM5QWlXOHJ1UnVWTThSQ2tfc2I5TXpLNFJ6dkdwbmhWcUlkeXN1ZFgtOVYxeV9IbERQZE1fVG9oTGhPM1g0bnNCSU1IQ0cyWjNSc2dzdXJSOW53endScnZ1VGF6TzdLdURrLTRzMzM5WF9wV0ZNaHNwQUxwcEhhYjIwOFkzSDBtb0dKRmNNYlJsWVl3aHlWeGpNeDdtMjQ2dThBMHJvdGhVTU90OA?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 500;'>AWS Says It Can’t Restore Some Data From Mideast Facilities Struck by Iran</a>
  </li>
  <li style='margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dotted #CBD5E1;'>
    <span style='display: inline-block; background-color: #DCFCE7; color: #166534; font-weight: bold; font-size: 12px; padding: 2px 8px; border-radius: 4px; margin-right: 8px;'>국내 | Chosunbiz</span>
    <a href='https://news.google.com/rss/articles/CBMiggFBVV95cUxPRXJhcVBucmdqQlpSeDFtWUZkZWhzUFNFb3VJWEFmMUVfeXRRUkR4TzBtUElxZUxwUW1ObkxXRFhlVlYtOGtiNUJVSDZ1czFDMEEwUVNSdTRRaVQ2bTBqZzdIXzZ6Z1E3a3BMaExyNk84YzFtVzlJZUpSSms3ejVkaVpn0gGWAUFVX3lxTE0wV1VORjFQMnZZZG83Nm9NcGJCQXdxZVhmemR4a1pMekVQVy1SZi12bUxDeGZwQTNZVjNZLTRCdS1lQ29VeGd1cGRQdXlKR3p2QmhXYUdrc0pWMVRQdk5PQ2ZGZS1kRmxzSl8yVDRTNXd1S21RbVcza1BRUG5wRDBuQkFrRTdiY1R0UUMzOV80YmFzc0NVdw?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 500;'>AWS “이란 공격에 손상된 걸프 데이터센터, 자료 일부 영구 손상”</a>
  </li>
  <li style='margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dotted #CBD5E1;'>
    <span style='display: inline-block; background-color: #DCFCE7; color: #166534; font-weight: bold; font-size: 12px; padding: 2px 8px; border-radius: 4px; margin-right: 8px;'>국내 | mstoday.co.kr</span>
    <a href='https://news.google.com/rss/articles/CBMibEFVX3lxTE5sRnI5NmpaMGt6VHo0TS16Nm96RU9iY1N3WGZYZE5ULWpSeHpHWmZIZXYxNkxBN3dlaDF5bkt4YmVZVmI2c1F6ZF9wSDNWckZXWWJMbW9UUWNGVjRGT2x0RVlfbTJpdFdUUTg3Yg?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 500;'>전쟁에 멈춘 클라우드…AWS도 못 지킨 데이터센터</a>
  </li>
  <li style='margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dotted #CBD5E1;'>
    <span style='display: inline-block; background-color: #E0E7FF; color: #3730A3; font-weight: bold; font-size: 12px; padding: 2px 8px; border-radius: 4px; margin-right: 8px;'>해외 | CoreWeave</span>
    <a href='https://news.google.com/rss/articles/CBMiowFBVV95cUxNWTJwSXNYcE5PNXJmVkR6RXNSRzdGUDljLWVuRVBrYkZtY2pxME5UTjBFR05ZcjdRcVV1TTUtNUlxdXY1SzB4QzhubVJiZy1wZjMxZDF6czd5WXNjV0l6S3pPeEJyaGpFeURsWE9IX3ZJUEdDaEk5em9QeUVfWm9lVVc5c3psTndJVVVIRVBHSnhMYTVQNmQ4TVh2MU1ldE5KMmRJ?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 500;'>What It Takes to Bring Up a Multi-Rack NVIDIA Vera Rubin NVL72 Cluster</a>
  </li>
  <li style='margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dotted #CBD5E1;'>
    <span style='display: inline-block; background-color: #DCFCE7; color: #166534; font-weight: bold; font-size: 12px; padding: 2px 8px; border-radius: 4px; margin-right: 8px;'>국내 | 테크월드</span>
    <a href='https://news.google.com/rss/articles/CBMiaEFVX3lxTE9vLTdUcFhaZ1E0Rjk3bTczRVg3MjBfVWpCUFBHSVAwQzZScnRCd2ZsRElWa1J4bHVhY1o5TnZzMVlJZjZqcVRsMDNxUXFTbVZndFEtQkdaSEV0SVhZazVjdlJqX1dVUTlR?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 500;'>엔비디아, AI 데이터센터 전력 효율↑…베라 루빈·그록 3 LPX 투입</a>
  </li>
  <li style='margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dotted #CBD5E1;'>
    <span style='display: inline-block; background-color: #DCFCE7; color: #166534; font-weight: bold; font-size: 12px; padding: 2px 8px; border-radius: 4px; margin-right: 8px;'>국내 | 테크월드</span>
    <a href='https://news.google.com/rss/articles/CBMiaEFVX3lxTFBGcllRX2VDMWFFazgydkNoZVpOb3RybEZVUDVmS2YxRDB6Q3lZazduMUwyanM1Um1EY1pVVXVSbEhrcjN4QzFMSnV0TmFIcFJKMDJMUWI5OTdxSy10SzJjZlp1ck55c0hN?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 500;'>엔비디아, AI 데이터센터 전력망까지 직접 제어한다</a>
  </li>
  <li style='margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dotted #CBD5E1;'>
    <span style='display: inline-block; background-color: #E0E7FF; color: #3730A3; font-weight: bold; font-size: 12px; padding: 2px 8px; border-radius: 4px; margin-right: 8px;'>해외 | NVIDIA Blog</span>
    <a href='https://news.google.com/rss/articles/CBMibEFVX3lxTE15OTJ6NjdTOEl1aTB3N08yYkU1Z3JiZjBDNnJjeXBzNHlJeFJ6aWh6ZVBiUGxhWmRPSk1iVXNLWXBFbWNhWDdGX3JuN2txV0RDYnk4NTJ6WHI2MG4wNzF3d1RsN0hnU0k5UVRsWA?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 500;'>Emerald AI, Google and NVIDIA Launch Alliance to Advance Flexible AI Data Centers</a>
  </li>
  <li style='margin-bottom: 12px; padding-bottom: 10px;'>
    <span style='display: inline-block; background-color: #DCFCE7; color: #166534; font-weight: bold; font-size: 12px; padding: 2px 8px; border-radius: 4px; margin-right: 8px;'>국내 | 디지털투데이</span>
    <a href='https://news.google.com/rss/articles/CBMic0FVX3lxTFBCbVRSRzNlS213SGlybVlrbDJvVEdpNXVIY3VSSUFpbk9RWkE5NEozOVZjMGFiRi0yUlRuYTk1cHoyaWJHcFpWWjRJMnFnSTZxWEpkdnlXRkVRMl93SUpkc1hWWFFqYklXdjQtVmMxOVM0ZEk?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 500;'>세일즈포스, AWS·구글 클라우드와 AI 동맹 확장...데이터 장벽 허문다</a>
  </li>
</ul>

</div>